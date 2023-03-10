import React, { useContext} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contects/UserContexts';

const Login = () => {
    const { user,signIn, signInWithGoogle } = useContext(AuthContext)


    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)



        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
                getUserToken(email)
               
            })
            .catch(err => console.log(err))

    }



    const handleGoogleSignIn = () => {
       
        signInWithGoogle(user)
            .then(result => {
                const user = result.user;
                console.log(user)

                const data = {
                    name: user?.displayName,
                    photoURL: user.photoURL,
                    email: user?.email,
                    userId: user?.uid,
                    userType: 'buyer'
                };

                fetch('https://y-hay6nry43-mhsolyman.vercel.app/users', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Success:', data);
                        
                       
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
                   
                    getUserToken(user?.email)

               
            })
            .catch(err => console.log(err))
           
    }



    const getUserToken = email => {
        fetch(`https://y-hay6nry43-mhsolyman.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    navigate(from, { replace: true })

                }
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Log in now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to={''} className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">submit</button>
                            </div>


                        </div>
                    </form>
                </div>

            </div>

            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary" >Login With Google</button>




        </div>
    );
};

export default Login;
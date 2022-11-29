import React, { useContext } from 'react';
import { AuthContext } from '../../Contects/UserContexts';


const Addproduct = () => {

  const {user} =useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const productName = form.productname.value;
        const img = form.photoURL.value;


        const location = form.location.value;
        const resalePrice = form.resaleprice.value;
        const originalPrice = form.originalprice.value;
        const yearsofuse = form.yearsofuse.value;
        const conditionType = form.conditiontype.value;
        const mobileNumber = form.mobilenumber.value;
        const yearOfPurchase = form.yearOfPurchase.value;




        const data = {
            name,
            productName,
            img,
            location,
            resalePrice,
            originalPrice,
            yearsofuse,
            conditionType,
            mobileNumber,
            yearOfPurchase,
            email:user?.email,
            postDate:new Date()


        };

        fetch('http://localhost:5000/product', {
            method: 'POST',
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



    }

    return (
        <div>
            Add A product
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register in now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input type="text" name="name" placeholder="Full name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">productName</span>
                                </label>
                                <input type="text" name="productname" placeholder="productName" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name='location' placeholder="location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">original price</span>
                                </label>
                                <input type="text" name='originalprice' placeholder="originalprice" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">resale price</span>
                                </label>
                                <input type="text" name='resaleprice' placeholder="resale price" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">years of use</span>
                                </label>
                                <input type="text" name='yearsofuse' placeholder="years of use" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">condition type</span>
                                </label>
                                <input type="text" name='conditiontype' placeholder="condition type" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">mobile number</span>
                                </label>
                                <input type="text" name='mobilenumber' placeholder="mobile number" className="input input-bordered" required />

                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Year of purchase</span>
                                </label>
                                <input type="text" name='yearOfPurchase' placeholder="Year of purchase" className="input input-bordered" required />

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">submit</button>
                            </div>


                        </div>
                    </form>

                </div>

            </div>



        </div>
    );
};

export default Addproduct;
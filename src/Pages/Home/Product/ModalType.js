import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { AuthContext } from '../../Contects/UserContexts';


const ModalType = ({ d }) => {
    console.log(d)
    const { user } = useContext(AuthContext)
const naigate=useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const Blocation = form.Blocation.value;
        const productName = form.Bmobilenumber.value;

        const data = {
            Bname: user?.name,
            Bemail: user?.email,
            Blocation,
            productName,
            book: 'book'
        };
        console.log(d?._id);

        fetch(`https://y-hay6nry43-mhsolyman.vercel.app/book/${d?._id}`, {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                swal("Good job!", "You clicked the button!", "success");
                naigate('/Myorder')
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    return (
        <div>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Byer Name</span>
                                        </label>
                                        <input type="text" name="Bname" placeholder={user?.displayName} className="input input-bordered" disabled required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">user email</span>
                                        </label>
                                        <input type="text" name="Bemail" placeholder={user?.email} className="input input-bordered" disabled required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">catagory name</span>
                                        </label>
                                        <input type="text" name="photoURL" placeholder={d.name} className="input input-bordered" disabled required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">product name</span>
                                        </label>
                                        <input type="text" name='location' placeholder={d.productName} className="input input-bordered" disabled required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">resale Price </span>
                                        </label>
                                        <input type="text" name='originalprice' placeholder={d?.resalePrice} className="input input-bordered" disabled required />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">mobile number</span>
                                        </label>
                                        <input type="text" name='Bmobilenumber' placeholder="mobile number" className="input input-bordered" required />

                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">contact location</span>
                                        </label>
                                        <input type="text" name='Blocation' placeholder="contact location" className="input input-bordered" required />

                                    </div>


                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary" >  submit</button>
                                    </div>


                                </div>
                            </form>

                        </div>

                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ModalType;
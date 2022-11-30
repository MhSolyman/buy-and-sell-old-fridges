import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contects/UserContexts';


const Products = ({ d }) => {
    const { user } = useContext(AuthContext)
    const [users, setUser] = useState()


    useEffect(() => {
        fetch(`http://localhost:5000/users/${d?.email}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [d?.email])



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

        fetch(`http://localhost:5000/book/${d?._id}`, {
            method: 'PUT',
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
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={d.img} alt="" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center imge">
                    <h2 className="card-title ">Product name: {d.productName
                    }</h2>
                    <p> <b> Seller name: </b>   {users?.name} {users?.veryfy && <span><div className="badge badge-primary">✓</div></span>}</p>
                    <p> <b> Brand name:  </b>   {d.name}</p>

                    <p> <b> Location:    </b>  {d.location}</p>

                    <p> <b> Orginal pricw</b>   {d.originalPrice}</p>



                    <p><b>
                        conditionType:
                    </b> {d?.conditionType}</p>
                    <p>Resele price: {d.resalePrice}</p>
                    <p> <b> Post time:   </b> {d.postDate}</p>





                    {/* The button to open modal */}
                    <label htmlFor="my-modal" className="btn  btn-primary">Book Now</label>

                    {/* Put this part before </body> tag */}
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
                                                <button className="btn btn-primary" > <Link to={`/oneproduct/${d?._id}`}></Link> submit</button>
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
            </div>

        </div>
    );
};

export default Products;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = ({ d }) => {
    const [user,setUser] = useState() 
    console.log(user?.name)

    useEffect(()=>
    {
        fetch(`http://localhost:5000/users/${d?.email}`)
  .then((response) => response.json())
  .then((data) => setUser(data));
    },[d?.email])

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={d.img} alt="" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center imge">
                    <h2 className="card-title ">Product name: {d.productName
                    }</h2>
                          <p> <b> Seller name: </b>   {user?.name} {user?.veryfy && <span><div className="badge badge-primary">✓</div></span> }</p>
                    <p> <b> Brand name:  </b>   {d.name}</p>
              
                    <p> <b> Location:    </b>  {d.location}</p>

                    <p> <b> Orginal pricw</b>   {d.originalPrice}</p>



                    <p>Resele price: {d.resalePrice}</p>
                    <p> <b> Post time:   </b> {d.postDate}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"> <Link to={`/modal/${d?._id}`}>Book Now</Link> </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Products;
import React, { useEffect, useState } from 'react';


const Products = ({ d, setD }) => {

    const [users, setUser] = useState()



    useEffect(() => {
        fetch(`https://y-hay6nry43-mhsolyman.vercel.app/users/${d?.email}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [d?.email])

    const handleReport = (id) => {
        fetch(`https://y-mhsolyman.vercel.app/report/${id}`, {
            method: 'PUT',

        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
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



                    <label className="btn  btn-xs" onClick={() => handleReport(d?._id)}>Report</label>


                    {/* The button to open modal */}
                    <label htmlFor="my-modal" className="btn  btn-primary" onClick={() => setD(d)}>Book Now</label>

                    {/* Put this part before </body> tag */}

                </div>
            </div>

        </div>
    );
};

export default Products;
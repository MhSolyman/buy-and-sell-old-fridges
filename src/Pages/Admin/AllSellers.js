import React, { useEffect, useState } from 'react';



const AllSellers = () => {
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/seller')
            .then((response) => response.json())
            .then((data) => setSellers(data));
    }, [])
    return (
        <div>
            All Sellers
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                img
                            </th>
                            <th>name</th>
                            <th>email</th>
                            <th>type</th>
                            <th>Veryfy</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map(seller => <tr key={seller._id}>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={seller.photoURL} alt='' />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {seller.name}
                                <br />

                            </td>
                            <td>{seller.email}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">{seller.userType}</button>
                            </th>
                            <td>
                                <button className="btn btn-info btn-md">Veryfication</button>

                            </td>


                            <td>
                                <button className="btn btn-error">DELETE</button>

                            </td>



                        </tr>)}





                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllSellers;
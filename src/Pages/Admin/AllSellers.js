import React, { useEffect, useState } from 'react';



const AllSellers = () => {
    const [sellers, setSellers] = useState([]);
    console.log(sellers)
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
                            <th>category</th>
                            <th>products name</th>
                            <th>post date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map(seller => <tr>

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
                        </tr>)}





                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllSellers;
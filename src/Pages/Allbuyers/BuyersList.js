import React, { useEffect, useState } from 'react';

const BuyersList = () => {
    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/buyers')
            .then((response) => response.json())
            .then((data) => setBuyers(data));
            
    }, [])
    return (
        <div>

            All Buyers
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
                  
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyers.map(buyer=><tr key={buyer._id}>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={buyer.photoURL}  alt=''/>
                                        </div>
                                    </div>
                                    
                                </div>
                            </td>
                            <td>
                            {buyer.name}
                                <br />
                                
                            </td>
                            <td>{buyer.email}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">{buyer.userType}</button>
                            </th>
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

export default BuyersList;
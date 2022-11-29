import React from 'react';
import { useQuery } from '@tanstack/react-query'

const BuyersList = () => {

            

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data
        }
    })


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/Deleteuser/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.json()
            .then((data) => {
                

                    refetch()
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
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
                            <button onClick={()=>handleDelete(buyer?._id)} className="btn btn-error">DELETE</button>
                                
                            </td>
                        </tr>)}
                        

                        


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default BuyersList;
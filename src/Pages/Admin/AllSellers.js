import React from 'react';
import { useQuery } from '@tanstack/react-query'



const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://y-hay6nry43-mhsolyman.vercel.app/sellers');
            const data = await res.json();
            return data
        }
    })




    const veryfy = (id) => {
        fetch(`https://y-hay6nry43-mhsolyman.vercel.app/veryfy/${id}`, {
            method: 'PUT',

        })
            .then((response) => response.json())
            .then((data) => {
                if (data.modifiedCount > 0) {

                    refetch()
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    const handleDelete = (id) => {
        fetch(`https://y-hay6nry43-mhsolyman.vercel.app/Deleteuser/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then((data) => {


                refetch()

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
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
                                {seller?.veryfy !== 'veryfy' && <button onClick={() => veryfy(seller?._id)} className="btn btn-info btn-md">Veryfication</button>}

                            </td>



                            <td>
                                <button onClick={() => handleDelete(seller?._id)} className="btn btn-error">DELETE</button>

                            </td>



                        </tr>)}





                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllSellers;
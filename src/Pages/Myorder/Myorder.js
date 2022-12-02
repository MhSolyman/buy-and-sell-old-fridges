import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contects/UserContexts';




const Myorder = () => {
    const { user } = useContext(AuthContext)


    const [book, setBook] = useState([])
    console.log(book)
    useEffect(() => {
        axios.get(`https://y-hay6nry43-mhsolyman.vercel.app/book/${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
           
            .then((data) => setBook(data.data));
    }, [user?.email])

    return (
        <div>
<div> MyOrder</div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                        
                            <th>Catagory</th>
                            <th>Product Name</th>
                            
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        book.map(b => <tr key={b._id}>
                         
                            <td>{b.name}</td>
                            <td>{b.productName}</td>
                            <td>{b.resalePrice}</td>
                            <button className="btn btn-primary">purchase</button>
                        </tr>)
                    }
                    <tbody>




                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Myorder;
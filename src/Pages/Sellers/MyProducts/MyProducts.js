import React, { useContext} from 'react';
import { useQuery } from '@tanstack/react-query'


import { AuthContext } from '../../Contects/UserContexts';
import swal from 'sweetalert';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
  


    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://y-hay6nry43-mhsolyman.vercel.app/products/${user?.email}`);
            const data = await res.json();
            return data
        }
    })





      
    const advatize = (id) => {
        fetch(`https://y-hay6nry43-mhsolyman.vercel.app/advatize/${id}`, {
            method: 'PUT',

        })
            .then((response) => response.json())
            .then((data) => {
                swal("weldone");
                refetch()
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }





    const handleDelete = (id) => {
        fetch(`https://y-hay6nry43-mhsolyman.vercel.app/DeleteMyprodut/${id}`, {
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
            MyProducts
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
                            <th>price</th>
                            <th>Advatize</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product=><tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product.img}  alt=''/>
                                        </div>
                                    </div>
                                    
                                </div>
                            </td>
                            <td>
                            {product.name}
                                <br />
                                
                            </td>
                            <td>{product.productName}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">{product.postDate}</button>
                            </th>
                            <td>{product.originalPrice}</td>
                            <td>
                                {product?.advatize !=='advatize' && <button className="btn btn-primary" onClick={()=>advatize(product?._id)}>advatize</button>}
                                
                            </td>
                            <td>
                                <button className="btn btn-error" onClick={()=>handleDelete(product?._id)}>Delete</button>
                            </td>
                        </tr>)}
                        

                        


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;

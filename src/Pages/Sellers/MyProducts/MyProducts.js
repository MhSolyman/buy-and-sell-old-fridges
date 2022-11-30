import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Contects/UserContexts';
import swal from 'sweetalert';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [products,setProducts]=useState([])
    products.map(p=>console.log(p))
    console.log(products)
    useEffect(() => {
        fetch(`http://localhost:5000/products/${user?.email}`)
        .then((response) => response.json())
        .then((data) => setProducts(data));

      }, [user?.email]);
      
    const advatize = (id) => {
        fetch(`http://localhost:5000/advatize/${id}`, {
            method: 'PUT',

        })
            .then((response) => response.json())
            .then((data) => {
                swal("weldone");
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
                                <button className="btn btn-error" onClick={()=>advatize(product?._id)}>Delete</button>
                            </td>
                        </tr>)}
                        

                        


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;

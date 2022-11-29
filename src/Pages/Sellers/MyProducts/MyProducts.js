import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contects/UserContexts';

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
                            <th></th>
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
                        </tr>)}
                        

                        


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;

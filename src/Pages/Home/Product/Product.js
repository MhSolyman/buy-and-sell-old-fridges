import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from './Products';

const Product = () => {
    const data = useLoaderData();

    console.log(data)
    return (

        <div>
           
            {data.map(d=>( <Products key={d._id}
                d={d}></Products>))
            }
           

        </div>
    );
};

export default Product;
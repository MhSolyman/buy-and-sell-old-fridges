import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ModalType from './ModalType';
import Products from './Products';

const Product = () => {
    const data = useLoaderData();
    const [d,setD] =useState({})
    console.log(d)


    return (

        <div className='grd'>

            {data.map(d => (<Products key={d._id}
                d={d}
                setD ={setD}
            ></Products>))
            }
            <ModalType d={d}>

            </ModalType>


        </div>
    );
};

export default Product;
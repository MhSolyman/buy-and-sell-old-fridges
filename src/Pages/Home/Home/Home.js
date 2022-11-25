import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';

const Home = () => {
    const foods = useLoaderData();
    console.log(foods)
   
    return (
        <div>
            Home

            {
                foods.map(f=><Catagory
                key={f._id}
                f={f}
                ></Catagory>)
            }

            
        </div>
    );
};

export default Home;
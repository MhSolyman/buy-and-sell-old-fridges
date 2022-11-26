import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';

const Home = () => {
    const catagoris = useLoaderData();



    return (
        <div>
            Home




            {
                catagoris.map(catagory => <Catagory
                    key={catagory._id}
                    catagory={catagory}
                ></Catagory>)
            }


        </div>
    );
};

export default Home;
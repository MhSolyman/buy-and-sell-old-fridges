import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';

import './catagory.css'
const Home = () => {
    const catagoris = useLoaderData();



    return (
        <div >
            Home

            <div class="grid grid-flow-col auto-cols-max">
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>


            <div className='grd'>
                {
                    catagoris.map(catagory => <Catagory
                        key={catagory._id}
                        catagory={catagory}
                    ></Catagory>)
                }
            </div>


        </div>
    );
};

export default Home;
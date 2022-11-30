import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';
import Advatizeitem from './Advatizeitem/Advatizeitem';

import './catagory.css'
const Home = () => {
    const catagoris = useLoaderData();

    const [additems,setAdditems] = useState([])
    console.log(additems)
    useEffect(()=>{
        fetch('http://localhost:5000/allproduct')
  .then((response) => response.json())
  .then((data) => setAdditems(data));

    },[])



    return (
        <div >
            Home

            


            <div className='grd'>
                {
                    catagoris.map(catagory => <Catagory
                        key={catagory._id}
                        catagory={catagory}
                    ></Catagory>)
                }
            </div>
            <div>
                <h6>Advatize Item</h6>
                <div className='grd'>
                {
                    additems.map(additem=><Advatizeitem key={additem._id} additem={additem}></Advatizeitem>)
                }
                </div>

            </div>


        </div>
    );
};

export default Home;
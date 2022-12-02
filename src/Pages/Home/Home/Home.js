import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';
import Advatizeitem from './Advatizeitem/Advatizeitem';
import imgA from './Dollar_bill_and_small_change.jpg'

import './catagory.css'
const Home = () => {
    const catagoris = useLoaderData();

    const [additems, setAdditems] = useState([])
    console.log(additems)
    useEffect(() => {
        fetch('https://y-hay6nry43-mhsolyman.vercel.app/allproduct')
            .then((response) => response.json())
            .then((data) => setAdditems(data));

    }, [])



    return (
        <div >
            Home




  
  <div id="item1" className="carousel-item w-full">
    <img src={imgA} alt={''} className="w-full h-1/4" />
  </div> 




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
                        additems.map(additem => <Advatizeitem key={additem._id} additem={additem}></Advatizeitem>)
                    }
                </div>

            </div>


            <div className='text-3xl'>Buy products from us?</div>
            <p>Because we provide your safety, your money's safety, your money's safety .<br />
            Our website is more secure than any other website <br />
            And you can buy everything from the comfort of your home. <br />
            </p>


        </div>
    );
};

export default Home;
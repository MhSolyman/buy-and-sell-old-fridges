import React from 'react';
import { Link } from 'react-router-dom';



const Catagory = ({catagory}) => {
   
    return (
        <div className='grd'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                
                <div className="card-body ">
                    <h2 className="card-title">
                        {catagory.name}
                        
                    </h2>

                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/category/${catagory._id}`} >go to</Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Catagory;
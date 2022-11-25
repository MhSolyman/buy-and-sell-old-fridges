import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({f}) => {
    console.log(f)
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {f.name}
                        
                    </h2>

                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/category/${f._id}`} >go to</Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Catagory;
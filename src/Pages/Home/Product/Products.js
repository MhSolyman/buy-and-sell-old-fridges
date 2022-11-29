import React from 'react';

const Products = ({ d }) => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-2.5">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{d.productName}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
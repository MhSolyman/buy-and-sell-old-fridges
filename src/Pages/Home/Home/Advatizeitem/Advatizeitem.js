import React from 'react';

const Advatizeitem = ({ additem }) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={additem.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>

                    <p> <b> Brand name:  </b>   {additem?.name}</p>

                    <p> <b> Location:    </b>  {additem?.location}</p>

                    <p> <b> Orginal pricw</b>   {additem?.originalPrice}</p>

                    <p><b>
                        conditionType:
                    </b> {additem?.conditionType}</p>

                    <p>Resele price: {additem?.resalePrice}</p>
                    <p> <b> Post time:   </b> {additem?.postDate}</p>


                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advatizeitem;
import React from 'react';
import { Link } from 'react-router-dom';

const AllCategories = ({category}) => {
    const { brand, img, _id } = category;
    return (
        <div className="card w-96 bg-blue-400 shadow-xl rounded-md text-white">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">
                    Brand: {brand}
                </h2>
                <div className="card-actions justify-center">
                    <Link to={`/allPhones/${_id}`}><button className="btn btn-outline btn-active rounded-xl">See All</button></Link>
                </div>
            </div>
            </div>
    );
};

export default AllCategories;
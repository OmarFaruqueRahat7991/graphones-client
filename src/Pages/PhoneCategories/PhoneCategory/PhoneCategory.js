import React from 'react';


const PhoneCategory = ({category}) => {
    const {  img, brand, name, location, resale_price, original_price, used_time, posted_date, seller_name } = category;
    return (
        <div className="card w-96 bg-blue-400 shadow-xl rounded-md">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Brand: {brand}
                    <div className="badge badge-warning rounded-md">Condition: Used</div>
                </h2>
                <div style={{whiteSpace: 'nowrap'}} className='text-2xl font-semibold'>
                    <p>{name}</p>
                </div>
                <div>
                    <h4>Seller Name: {seller_name}</h4>
                    <p>Resale Price: {resale_price}</p>
                    <p>Original Price: {original_price}</p>
                </div>
                <div>
                    <h1 className="font-thin">Used time: {used_time}</h1>
                    <h2>Posted On: {posted_date}</h2>
                </div>
                <div>
                    <p className='text-white inline-flex gap-2'>Location: {location} </p>
                </div>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" className="btn btn-outline btn-active rounded-xl">Book Now</label>
                </div>
            </div>
            <div className='hidden'>
            </div>
        </div>
    );
};

export default PhoneCategory;
import React from 'react';

const PopularItems = ({ item }) => {
    const { img, carName, supplierName, price, quantity, description } = item;
    return (
        <div className="col">
            <div className="card h-100">
            <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger">
                Hot
                <span className="visually-hidden">hot item</span>
            </span>
                <img className='w-100' src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title mb-4">{carName}</h5>
                    <p>Supplier Name: {supplierName}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularItems;
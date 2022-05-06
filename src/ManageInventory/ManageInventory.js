import React from 'react';

const ManageInventory = ({item}) => {
    const { _id, img, carName, supplierName, price, quantity,  description } = item;

    const handleDeleteBtn = id => {

    }

    return (
        <div className="col">
            <div className="card h-100">
                <img className='w-100' src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title mb-4">{carName}</h5>
                    <p>Supplier Name: {supplierName}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p className="card-text">{description}</p>
                    <button onClick={() => handleDeleteBtn(_id)} className='btn btn-dark'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;
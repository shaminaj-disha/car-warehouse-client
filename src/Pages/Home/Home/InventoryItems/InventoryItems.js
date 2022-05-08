import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryItems = ({item}) => {
    const { _id, img, carName, supplierName, price, quantity,  description } = item;

    const navigate = useNavigate();

    const navigateToInventoryUpdate = id => {
        navigate(`/inventory/${id}`); // navigate to dynamic url
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
                    <button onClick={() => navigateToInventoryUpdate(_id)} className='btn btn-dark'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;
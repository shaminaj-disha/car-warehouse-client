import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';

const UpdateInventory = () => {
    const { itemId } = useParams();
    const [item] = useItemDetails(itemId);
    return (
        <div className='mt-4'>
            <div className="card mx-auto" style={{ width: "18rem" }}>
                <img className='w-100' src={item?.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title mb-4">{item?.carName}</h5>
                    <p>Supplier Name: {item?.supplierName}</p>
                    <p>Price: {item?.price}</p>
                    <p>Quantity: {item?.quantity}</p>
                    <p>Sold: {item?.sold}</p>
                    <p className="card-text">{item?.description}</p>
                    <button className='btn btn-dark'>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateInventory;
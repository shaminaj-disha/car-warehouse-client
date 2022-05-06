import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';

const UpdateInventory = () => {
    const { itemId } = useParams();
    const [item] = useItemDetails(itemId);
    const handleRestockItems = event => {
        event.preventDefault();
    }
    return (
        <div className='mt-4 d-flex justify-content-around'>
            <div className="card" style={{ width: "18rem" }}>
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
            <div>
                <div className='p-4 bg-info' style={{ height: "200px" }}>
                    <h2>Restock The Items</h2>
                    <form onSubmit={handleRestockItems}>
                        <input className='w-100 mb-2' type="number" name='number' placeholder='Quantity you want to restock' required />
                        <br />
                        <input className='btn btn-dark' type="submit" value="Place Order" />
                    </form>
                </div>
                <div className='my-5 d-flex justify-content-center'>
                    <button className='btn btn-dark'>Manage Inventories</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateInventory;
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';

const UpdateInventory = () => {
    const { itemId } = useParams();
    const [item, setItem] = useItemDetails(itemId);
    let navigate = useNavigate();
    const manageInventory = () => {
        navigate("/manageInventory"); // navigate to manage inventory to show all of the items
    }
    const deliveredItem = () =>{
        const quantity = (parseInt(item?.quantity) - 1);
        console.log(item?.sold);
        const sold = (parseInt(item?.sold) + 1);
        console.log(quantity);
        const updatedItem = { quantity, sold };
        console.log(updatedItem);

        // send data to server
        const url = `http://localhost:5000/items/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Item updated successfully');
                // const newItem = item?.find(findItem => findItem._id === itemId);
                // console.log('new Item ', newItem);
                setItem({...item, quantity: updatedItem.quantity, sold: updatedItem.sold});
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    
    const handleRestockItems = event => {
        event.preventDefault();
        const quantity = parseInt(item?.quantity) + parseInt(event.target.quantity.value);
        console.log(quantity);
        const updatedItem = { quantity };

        // send data to server
        const url = `http://localhost:5000/items/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Item updated successfully');
                event.target.reset();
                // console.log('updatedItem ', updatedItem);
                setItem({...item, quantity: updatedItem.quantity});
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className='mt-4 d-flex justify-content-around'>
            <div className="card" style={{ width: "18rem" }}>
                <img className='w-100' src={item?.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title mb-4">{item?.carName}</h5>
                    <p>Id: {itemId}</p>
                    <p>Supplier Name: {item?.supplierName}</p>
                    <p>Price: {item?.price}</p>
                    <p>Quantity: {item?.quantity}</p>
                    <p>Sold: {item?.sold}</p>
                    <p className="card-text">{item?.description}</p>
                    <button onClick={deliveredItem} className='btn btn-dark'>Delivered</button>
                </div>
            </div>
            <div>
                <div className='p-4 bg-info' style={{ height: "200px" }}>
                    <h2>Restock The Items</h2>
                    <form onSubmit={handleRestockItems}>
                        <input className='w-100 mb-2' type="number" name='quantity' placeholder='Restock Quantity' required />
                        <br />
                        <input className='btn btn-dark' type="submit" value="Restock" />
                    </form>
                </div>
                <div className='my-5 d-flex justify-content-center'>
                    <button onClick={manageInventory} className='btn btn-dark'>Manage Inventories</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateInventory;
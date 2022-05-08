import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/addedItems?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });
    }, [user]);

    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingItems = items.filter(item => item._id !== id);
                    setItems(remainingItems);
                })
        }
    }

    return (
        <div className='m-2'>
            <h2 className='text-center my-4'>{items.length} Items Added By {user.displayName}</h2>
            <div className='container' style={{ overflowX: "auto" }}>
                <table className="table table-bordered table-hover" >
                    <thead className='table-dark'>
                        <tr>
                            {/* <th scope="col">Id</th> */}
                            <th scope="col">Image</th>
                            <th scope="col">Car Name</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item =>
                            <tr key={item._id}>
                                {/* <th scope="row">{item?._id}</th> */}
                                <td><img src={item?.img} width="50px" alt="" /> </td>
                                <td>{item?.carName}</td>
                                <td>{item?.supplierName}</td>
                                <td>{item?.price}</td>
                                <td>{item?.quantity}</td>
                                <td>{item?.sold}</td>
                                <td><button onClick={() => handleDeleteItem(item._id)}>X</button></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
            {/* <div className='my-5 d-flex justify-content-center'>
                <button onClick={handleAddItems} className='btn btn-dark'>Add New Item</button>
            </div> */}
        </div>
    );
};

export default MyItems;
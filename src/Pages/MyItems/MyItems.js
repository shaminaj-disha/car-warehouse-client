import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/solid';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getUserItems = async () => {
            const email = user?.email;
            const url = `https://afternoon-tundra-60480.herokuapp.com/addedItems?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getUserItems();
    }, [user, navigate]);

    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://afternoon-tundra-60480.herokuapp.com/items/${id}`;
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

    const handleAddItems = () => {
        navigate('/addItems');
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
                                <td><button onClick={() => handleDeleteItem(item._id)}><TrashIcon className='text-dark' style={{width: "20px"}}></TrashIcon></button></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
            <div className='my-5 d-flex justify-content-center'>
                <button onClick={handleAddItems} className='btn btn-dark'>Add New Item</button>
            </div>
        </div>
    );
};

export default MyItems;
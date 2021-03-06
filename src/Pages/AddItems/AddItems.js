import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddItems = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);
        const url = `https://afternoon-tundra-60480.herokuapp.com/addedItems`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                alert('Item Added Successfully');
                reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className='w-50 mx-auto my-4'>
            <h2 className='text-center'>Add New Item</h2>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-2' value={user?.displayName} type="text" readOnly {...register("name", { required: true })} />
                <input className='my-2' value={user?.email} type="email" readOnly {...register("email", { required: true })} />
                <input className='my-2' placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input className='my-2' placeholder='Car Name' type="text" {...register("carName", { required: true })} />
                <input className='my-2' placeholder='Supplier Name' {...register("supplierName", { required: true })} />
                <input className='my-2' placeholder='Price' type="number" {...register("price", { required: true })} />
                <input className='my-2' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input className='my-2' placeholder='Number of Sold Cars' type="number" {...register("sold", { required: true })} />
                <textarea className='my-2' placeholder='Description' {...register("description", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input className='w-50 btn btn-dark mx-auto mt-3' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;
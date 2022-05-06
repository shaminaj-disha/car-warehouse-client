import React from 'react';
import useItems from '../../../hooks/useItems';
import Banner from './Banner/Banner';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    const [items] = useItems();
    const newItems = items.slice(0, 6);
    return (
        <div>
            <Banner></Banner>
            <div className='container my-5'>
                <h1 className='text-center text-dark my-5'>Inventory Items</h1>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        newItems.map(item =>
                            <InventoryItems
                                key={item._id}
                                item={item}>
                            </InventoryItems>)
                    }
                </div>
                <div className='my-5 d-flex justify-content-center'>
                    <button className='btn btn-dark'>Manage Inventories</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
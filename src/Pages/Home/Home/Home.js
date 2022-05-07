import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Banner from './Banner/Banner';
import ImageGrid from './ImageGrid/ImageGrid';
import InventoryItems from './InventoryItems/InventoryItems';
import PopularItems from './PopularItems/PopularItems';

const Home = () => {
    const [items] = useItems();
    const newItems = items.slice(0, 6);
    const popular = items.slice(-4);
    let navigate = useNavigate();
    const manageInventory = () => {
        navigate("/manageInventory"); // navigate to manage inventory to show all of the items
    }
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
                    <button onClick={manageInventory} className='btn btn-dark'>Manage Inventories</button>
                </div>
            </div>
            <div className='container my-5'>
                <h1 className='text-center text-dark my-5'>Exclusive Items</h1>
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                    {
                        popular.map(item =>
                            <PopularItems
                                key={item._id}
                                item={item}>
                            </PopularItems>)
                    }
                </div>
            </div>
            <ImageGrid></ImageGrid>
        </div>
    );
};

export default Home;
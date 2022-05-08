import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import PopularItems from '../PopularItems/PopularItems';
import ImageGrid from '../ImageGrid/ImageGrid';

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            });
    }, []);
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
                {isLoading ? (<Loading></Loading>) : (<div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        newItems.map(item =>
                            <InventoryItems
                                key={item._id}
                                item={item}>
                            </InventoryItems>)
                    }
                </div>)}
                <div className='my-5 d-flex justify-content-center'>
                    <button onClick={manageInventory} className='btn btn-dark'>Manage Inventories</button>
                </div>
            </div>
            <div className='container my-5'>
                <h1 className='text-center text-dark my-5'>New and Popular</h1>
                {isLoading ? (<Loading></Loading>) : (<div className='row row-cols-1 row-cols-md-4 g-4'>
                    {
                        popular.map(item =>
                            <PopularItems
                                key={item._id}
                                item={item}>
                            </PopularItems>)
                    }
                </div>)}
            </div>
            <ImageGrid></ImageGrid>
        </div>
    );
};

export default Home;
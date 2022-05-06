import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/banner/banner1.png'
import banner2 from '../../../../images/banner/banner2.png'
import banner3 from '../../../../images/banner/banner3.png'

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Car Warehouse</h3>
                    <p>A collection of great cars</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Stock Of Cars</h3>
                    <p>A good deal of cars are stored</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Manage Your Car</h3>
                    <p>Manage the cars the way you want</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
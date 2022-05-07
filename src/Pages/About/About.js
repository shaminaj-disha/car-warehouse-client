import React from 'react';

const About = () => {
    return (
        <div className='container my-5 py-4'>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="https://img.freepik.com/free-photo/headlights-hood-black-sports-car_146671-5564.jpg?w=740" className="img-fluid w-100 h-100" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-center">
                            <h5 className="card-title">Car Warehouse</h5>
                            <p className="card-text">This is a storehouse for different kind of cars. Every car is supplied by our dear clients and is sold to our precious customers. Every car is gorgeous and maintained in a great way.</p>
                        </div>
                        <div className='text-center'>
                            <a href="https://www.youtube.com/watch?v=zXyZD_iifrc" target="_blank" rel="noopener noreferrer"><button className='btn btn-dark px-5'>Live Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
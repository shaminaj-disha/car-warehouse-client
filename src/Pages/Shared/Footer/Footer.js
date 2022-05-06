import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='w-100' style={{marginTop:"100px"}}>
            <footer className='bg-dark text-center mt-5 w-100' style={{ position: "fixed", bottom: 0 }}>
                <p className='text-light p-2'><small>Copyright &copy; {year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;
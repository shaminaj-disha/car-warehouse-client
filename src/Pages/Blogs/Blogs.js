import React from 'react';

const Blogs = ({blog}) => {
    const { question, answer } = blog;
    return (
        <div className='m-5 p-5 border border-secondary border-3 rounded text-center'>
            <h2 className='py-5 fw-bold'>{question}</h2>
            <p><span className='fw-bold'>Answer:</span> {answer}</p>
        </div>
    );
};

export default Blogs;
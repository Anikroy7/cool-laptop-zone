import React from 'react';
import './ReviewDetails.css';
const ReviewDetails = (props) => {
    const { name, review, ratings } = props.review
    return (
        <div className='bg-slate-300 p-10 rounded-lg m-2'>
            <h1 className='text-3xl font-bold '>Name: {name}</h1>
            <p className='mt-4 text-xl font-semibold'>Review:</p>
            <p className='mt-8 text-xl font-semibold'>{review}</p>
            <p className='mt-4 text-xl font-semibold'>Ratings: {ratings}</p>
        </div>
    );
};

export default ReviewDetails;
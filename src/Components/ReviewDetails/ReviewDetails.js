import React from 'react';
import './ReviewDetails.css';
const ReviewDetails = (props) => {
    const { name, review, ratings, image } = props.review
    return (
        <div className='bg-slate-300 p-2 rounded-lg m-2'>
            <div className='review-image-container mt-4'>
                <img src={image} alt="" />
                <h1 className='text-xl font-bold text-cyan-800'> {name}</h1>
            </div>
            <div className='review-details-container'>
                <p className='mt-4 text-xl font-semibold'>Review:</p>
                <p className='mt-2 '>{review}</p>
                <p className='mt-4  font-semibold'>Ratings: {ratings}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;
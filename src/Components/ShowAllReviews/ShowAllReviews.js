import React from 'react';
import './ShowAllReviews.css'

const ShowAllReviews = (props) => {
    const { name, ratings, review, image } = props.reviews;
    return (
        <div className='bg-red-200  rounded-lg m-2 p-8'>
            <div className='all-details-image-container text-center '>
                <img src={image} alt="" />
            </div>
            <div className='all-details-container mx-auto'>
                <h1 className='text-3xl font-bold '>Name: {name}</h1>
                <p className='mt-4 text-xl font-semibold'>Review:</p>
                <p className='mt-2 text-xl font-semibold'>{review}</p>
                <p className='mt-4 text-xl font-semibold'>Ratings: {ratings}</p>
            </div>
        </div>
    );
};

export default ShowAllReviews;
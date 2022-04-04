import React from 'react';

const ShowAllReviews = (props) => {
    const { name, ratings, review } = props.reviews;
    return (
        <div className='bg-slate-300 p-10 rounded-lg m-2'>
            <h1 className='text-3xl font-bold '>Name: {name}</h1>
            <p className='mt-4 text-xl font-semibold'>Review:</p>
            <p className='mt-2 text-xl font-semibold'>{review}</p>
            <p className='mt-4 text-xl font-semibold'>Ratings: {ratings}</p>
        </div>
    );
};

export default ShowAllReviews;
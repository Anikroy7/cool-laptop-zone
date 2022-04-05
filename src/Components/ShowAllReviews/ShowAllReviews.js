import React from 'react';

const ShowAllReviews = (props) => {
    const { name, ratings, review, image } = props.reviews;
    return (
        <div className='bg-slate-300  rounded-lg m-2'>
            <div >
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className='text-3xl font-bold '>Name: {name}</h1>
                <p className='mt-4 text-xl font-semibold'>Review:</p>
                <p className='mt-2 text-xl font-semibold'>{review}</p>
                <p className='mt-4 text-xl font-semibold'>Ratings: {ratings}</p>
            </div>
        </div>
    );
};

export default ShowAllReviews;
import React from 'react';
import useReviews from '../../hooks/useReviews';
import ShowAllReviews from '../ShowAllReviews/ShowAllReviews'
import './Reivews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();


    return (
        <div className='show-all-reviews-container'>
            {
                reviews.map(review => <ShowAllReviews
                    reviews={review}
                    key={review.id}
                ></ShowAllReviews>)
            }
        </div>
    );
};

export default Reviews;
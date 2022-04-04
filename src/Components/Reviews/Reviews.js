import React from 'react';
import useReviews from '../../hooks/useReviews';
import ShowAllReviews from '../ShowAllReviews/ShowAllReviews'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();


    return (
        <div>
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
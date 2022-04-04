import React from 'react';
import './ReviewDetails.css';
const ReviewDetails = (props) => {
    const { name, review } = props.review
    return (
        <div>
            <h1>name: {name}</h1>
            <p>review:</p>
            <p>{review}</p>
        </div>
    );
};

export default ReviewDetails;
import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const[reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://stormy-crag-70028.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[reviews])
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 mt-28 mx-12'>
            
        {
            reviews.map(review=><Review key={review._id} review={review}></Review>)
        }
    </div>
    );
};

export default Reviews;
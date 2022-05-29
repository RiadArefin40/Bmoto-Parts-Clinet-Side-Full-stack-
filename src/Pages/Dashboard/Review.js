import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
       
        <div className="card-body items-center text-center">
        <div className="avatar offline">
  <div className="w-24 rounded-full">
    <img src="https://api.lorem.space/image/face?hash=40361" />
  </div>
</div>
          <h2 className="card-title text-teal-500 text-2xl">{review?.name}</h2>
           <p>Review: {review?.rev}</p>
           <p className='text-orange-400'>Rating: {review?.ratings} out of 5</p>
         
          
          <div className="card-actions">
            
           
          </div>
        </div>
      </div>
    );
};

export default Review;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';

const Addreview = () => {
    const [user] = useAuthState(auth);
 
    const handleSubmit = (data) => {
    
        data.preventDefault();
        
         const review ={
           name:data.target.name.value,
           email:data.target.email.value,
           rev:data.target.review.value,
           ratings:data.target.ratings.value,
          
         }
     
         
        fetch('https://stormy-crag-70028.herokuapp.com/review',{
            method: 'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(review)
          })
          .then(res=>res.json())
          .then(data=>{
              toast.success('Review added');
            
            
          })
        
        
       
      }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-20 text-center">
        <div className="card-body">
          <h2 className="text-2xl">Add product review</h2>
        
        <form onSubmit={handleSubmit}>
             <input
          type="text"
          name="name"
          disabled
          placeholder={user?.displayName}
          value={user?.displayName || ''}
          className="input input-bordered w-full max-w-xs"
        />
              <input
          type="email"
          name="email"
          disabled
          placeholder={user?.email}
          value={user?.email || ''}
          className="input input-bordered w-full max-w-xs my-2"
        />
        <input
          type="textarea"
          name="review"
          placeholder='Enter you review'
          required
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="ratings"
          required
          placeholder='Enter Product-ratings'
          className="input input-bordered w-full max-w-xs my-2"
        />
         <input
            type="submit"
            value="Add Review"
            className="btn btn-secondary w-full max-w-xs"
          />
        </form>
        </div>
        </div>
    );
};

export default Addreview;
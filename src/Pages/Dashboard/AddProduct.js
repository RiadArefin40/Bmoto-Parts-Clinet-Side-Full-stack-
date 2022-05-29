import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    
    const handleSubmit = (data) => {
    
        data.preventDefault();
        
         const product ={
           name:data.target.name.value,
           img:data.target.img.value,
           des:data.target.des.value,
           min:data.target.min_quantity.value,
            ava:data.target.ava_quantity.value,
            price:data.target.price.value,
           
         }
      
         
        fetch('https://stormy-crag-70028.herokuapp.com/product',{
            method: 'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(product)
          })
          .then(res=>res.json())
          .then(data=>{
              toast.success('New product added');
            
            
          })
        
        
        console.log(user)
      }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-20 text-center">
        <div className="card-body">
          <h2 className="text-2xl">Add A New Product</h2>
          
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder='Enter Product-Name'
            required
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="des"
            required
            placeholder='Enter Product-description'
            className="input input-bordered w-full max-w-xs my-2"
          />
          <input
            type="number"
            name="min_quantity"
            required
            placeholder="Enter Minimum order Quantity"
            className="input input-bordered w-full max-w-xs "
          />
          <input
            type="number"
            name="ava_quantity"
            required
            placeholder="Enter Available Quantity"
            className="input input-bordered w-full max-w-xs my-2"
          />
             <input
            type="text"
            name="price"
            required
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            
          />
               <input
            type="text"
            name="img"
            required
            placeholder="Enter Image Link"
            className="input input-bordered w-full max-w-xs my-2"
            
          />
          <input
            type="submit"
            value="Add Product"
            className="btn btn-accent w-full max-w-xs"
          />
          </form>
        
          <div className="card-actions justify-end">
          
          </div>
         
        
        </div>
      </div>
    );
};

export default AddProduct;
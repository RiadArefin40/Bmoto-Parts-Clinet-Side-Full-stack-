import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate();
  const navigateToPurchase = (_id) => {
    console.log("navigate");
    navigate(`/purchase/${_id}`);
  }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={product.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl text-teal-500">{product.name}</h2>
    <p>{product.des}</p>
    <p> Price:{product.price}</p>
    <p>Min Order:{product.min}</p>
    <p>Available:{product.ava}</p>
    <div className="card-actions">
       <button  onClick={() => navigateToPurchase(product._id)} className="btn btn-accent px-10">Buy Now</button>
     
    </div>
  </div>
</div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import Productsrow from './Productsrow';

const ManageProduct = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://stormy-crag-70028.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[products])
  
    return (
        <div className="overflow-x-auto mt-10 mx-10">
        <table className="table w-full">
        
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Quantity {products.length}</th>
              <th>remove</th>
            </tr>
          </thead>
          <tbody>
             
           {
               products.map(product=><Productsrow key={product._id} product={product}></Productsrow>)
           }
          
          </tbody>
        </table>
      </div>
    );
};

export default ManageProduct;
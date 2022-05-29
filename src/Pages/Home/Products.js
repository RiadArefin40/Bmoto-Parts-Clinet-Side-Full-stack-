import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://stormy-crag-70028.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-28 mx-12'>
            
            {
                products.slice(0).reverse().slice(0,6).map(product=><Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;
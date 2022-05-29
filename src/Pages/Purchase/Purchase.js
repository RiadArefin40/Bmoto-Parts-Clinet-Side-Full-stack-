import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { toast } from "react-toastify";
const Purchase = () => {
  const { productid } = useParams();

  const [user, loading, error] = useAuthState(auth);
  console.log(user)
  
  


  const handleSubmit = (data) => {
    data.preventDefault();
    
    const order={
      orderId:product?._id,
      orderName:product?.name,
      orderQuantity:data.target.quantity.value,
      orderEmail:user?.email,
      customerName:user?.displayName,
      phone:data.target.phone.value,
      adress:data.target.adress.value,
      price:data.target.price.value,
     
    }
   

    fetch('https://stormy-crag-70028.herokuapp.com/order',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))




    toast('Order received Please confirm Payment')
    console.log(order);

  };

  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://stormy-crag-70028.herokuapp.com/product/${productid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productid]);

  const [quantity, setQuantity] = useState(product?.min); 
if(quantity<product.min){
  toast.error('You need to order minimum quantity')
}
  console.log(productid);
  return (
    <div>
      <div className="card  card-side bg-base-100 shadow-xl mx-60 mt-20">
        <figure className="pl-20">
          <img src={product.img} alt="" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl text-teal-500">{product.name}</h2>
          <p>{product.des}</p>
          <p>Price:{product.price}</p>
          <p>Available Quantity:{product.ava}.</p>
          <form></form>
         
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-3 justify-items-center mt-3"
      >
        <input
          type="text"
          name="name"
          disabled
          value={user?.displayName || ""}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          disabled
          value={user?.email || ""}
          className="input input-bordered w-full max-w-xs"
        />
         <input
          type="text"
          name="price"
          disabled
          value={product?.price || ""}
         
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          name="quantity"
          onChange={(e) => setQuantity(e.target.value)}
          min={product.min || ""}
          
          placeholder={product.min}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone-Number"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="adress"
          placeholder="Adress"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          disabled={quantity < product.min || quantity > product.ava}
          type="submit"
          value="Submit"
          className="btn btn-accent w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default Purchase;

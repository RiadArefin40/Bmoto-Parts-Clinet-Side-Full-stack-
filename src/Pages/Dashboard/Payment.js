import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import Checkoutform from "./Checkoutform";
const stripePromise = loadStripe(
  "pk_test_51L4hWrIT6f3LIQMAHqlg4LyHSTXpfpjbNySNqQWt3zKj074o3ca49zuuPfzpJOJnkmwujUxIHDwxRUBsGFvKYV1d00nl58Din0"
);
const Payment = () => {
  const { id } = useParams();
  const [orderproduct, setOrderProduct] = useState({});
  useEffect(() => {
    fetch(`https://stormy-crag-70028.herokuapp.com/order/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderProduct(data);
      });
  }, [id, orderproduct]);
  return (
    <div>
      <div className="card w-50 max-w-md  bg-base-100 shadow-xl mt-12 mx-auto">
        <div className="card-body text-center">
          <h2 className="text-3xl text-center font-bold text-teal-500">
            Hello {orderproduct?.customerName}
          </h2>
          <h2 className="text-2xl text-center font-bold text-orange-500">
            {" "}
            {orderproduct?.orderName}
          </h2>
          <p>Please confirm your order</p>
          <p className="text-orange-700">Please pay {orderproduct.price} to confirm your order.</p>

         
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 mx-auto  max-w-md shadow-2xl bg-base-100">
        <div className="card-body"></div>
        <Elements stripe={stripePromise}>
          <Checkoutform key={orderproduct?._key} orderproduct={orderproduct}  />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

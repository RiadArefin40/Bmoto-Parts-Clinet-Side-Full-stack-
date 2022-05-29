import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";


const Checkoutform = ({orderproduct}) => {
  const [carderror, setCarderror] = useState("");
  const [success, setSuccess] = useState("");
  const [tid, setTid] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  
  const [clientSecret,setClientSecret]=useState('');
  const price = orderproduct?.price;
  const name=orderproduct?.customerName;
  const email=orderproduct?.orderEmail;
  const id = orderproduct?._id;

   useEffect(()=>{
    fetch('https://stormy-crag-70028.herokuapp.com/create-payment-intern',{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
     body: JSON.stringify({price})

    })
     .then(res=>res.json())
     .then(data=>{
         
         if(data?.clientSecret){
                setClientSecret(data.clientSecret)
         }
     })

   },[price])


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCarderror(error?.message ||'');
    } else {
      setCarderror("");
      setProcessing(true);
    }
  

    const {paymentIntent, error:intenterror} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email:email
          },
        },
      },
    );
    if(intenterror){
      setCarderror(intenterror?.message);
      setSuccess('')
      setProcessing(false);
    }
    else{
     setCarderror('');
     setTid(paymentIntent.id);
     console.log(paymentIntent);
     setSuccess('Congrats!payment completed');
     const transactionId ={
       tId:paymentIntent.id
     }

     
     fetch(`https://stormy-crag-70028.herokuapp.com/order/${id}`,{
      method:'PATCH',
      headers:{
          'content-type':'application/json'
      },
     body: JSON.stringify(transactionId)
     })
     .then(res=>res.json())
     .then(data=>{
       setProcessing(false);
       console.log(data)
     })
    }
  };
  return (
    <>
      <form className="p-5" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-10"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      
        {carderror && <p className="text-red-500 text-2xl px-5 mb-2">{carderror}</p> }
        {success && <div className="text-green-500 text-2xl  px-5 mb-2">
          <p> {success}</p>
          <p>Your transaction id: <span className="text-orange-500"></span>{tid}</p>
          
         </div> }
      
    </>
  );
};

export default Checkoutform;

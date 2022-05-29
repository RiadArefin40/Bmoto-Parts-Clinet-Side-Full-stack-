import React,{useState, useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Myorder from './Myorder';
const Myorders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        if(user){
            fetch(`https://stormy-crag-70028.herokuapp.com/orders?orderEmail=${user.email}`)
            .then(res=>res.json())
            .then(data=> setOrders(data))
           }
    },[user,orders])
    
    return (
        <div className="overflow-x-auto w-full mt-20 mx-10">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Quantity</th>
        <th>price</th>
       
        <th>Payment</th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {orders.map(order=><Myorder key={order._id} order={order}></Myorder>)}
      
     
     
     
    </tbody>
   
    
  </table>
</div>
    );
};

export default Myorders;
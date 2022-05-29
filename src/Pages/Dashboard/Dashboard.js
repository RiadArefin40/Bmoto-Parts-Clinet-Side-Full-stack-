import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {/* <!-- Page content here --> */}
   
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-48 bg-base-300 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">Dashboard</Link></li>
      {!admin && <li><Link to="/dashboard/myorders">My Orders</Link></li>}
     {!admin &&  <li><Link to="/dashboard/review">Add A Review</Link></li>}
      <li><Link to="/dashboard/myprofile">My Profile</Link></li>
      { admin && <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>}
      { admin && <li><Link to="/dashboard/manageall">Manage all orders</Link></li>}
      { admin && <li><Link to="/dashboard/addproduct">Add a Product</Link></li>}
      { admin && <li><Link to="/dashboard/manageall">Manage products</Link></li>}
       
     
       
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;
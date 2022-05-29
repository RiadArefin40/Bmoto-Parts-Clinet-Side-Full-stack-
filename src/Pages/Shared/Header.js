import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
   
  
    const logOut=()=>{
        signOut(auth)
      } 
    return (
        <div className="navbar  bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
      <li><Link to='/blogs'>Blogs</Link></li>
      <li><a>About</a></li>
      <li><a>DashBoard</a></li>
      <li><a>login</a></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-teal-700 text-3xl uppercase">Bmoto-Parts</Link>
    
  </div>
  <div className="navbar-end mr-5 hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-xl">
    <li><Link to='/myportfolio'>MyPortFolio</Link></li>
    <li className='  bg-teal-200 flex justify-center items-center px-8  rounded-xl'>{user&& user?.displayName}</li>
    <li><Link to='/blogs'>Blogs</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li>{user && <Link to='/dashboard'>Dashboard</Link> }</li>
     
      <li>{ user? <button onClick={logOut} >LogOut</button>  :<Link to='/login'>Login</Link>}</li>
         
      
      
    </ul>
  </div>
 
</div>
    );
};

export default Header;
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

const Myprofile = () => {
    const [user, loading, error] = useAuthState(auth);
    const[updateUser,setUpdateUser]=useState({});
  

    useEffect(()=>{
        if(user){
            fetch(`https://stormy-crag-70028.herokuapp.com/user?email=${user.email}`)
            .then(res=>res.json())
            .then(data=> setUpdateUser(data))
           }
    },[user])
  
    
    
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-20">
        <div className="card-body text-center">
          <h2 className='text-2xl font-bold text-teal-500 ' >HELLO : {user?.displayName}</h2>
          <p>Email : {updateUser[0]?.email} </p>
          <p>Education : {updateUser[0]?.education} </p>
          <p>Location : {updateUser[0]?.location} </p>
          <p>Linked-In: {updateUser[0]?.linkedin} </p>

          <p className='text-xl text-purple-500'>GoTo Dashboard To Update Info</p>
          <div className="card-actions justify-end">

          </div>
        </div>
      </div>
    );
};

export default Myprofile;
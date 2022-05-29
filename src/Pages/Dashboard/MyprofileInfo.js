import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase.init";

const MyprofileInfo = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSubmit = (data) => {
    
    data.preventDefault();
    
     const userprofile ={
       email:data.target.email.value,
       name:data.target.name.value,
       phone:data.target.phone.value,
        education:data.target.education.value,
        location:data.target.location.value,
        linkedin:data.target.linkedin.value,
     }
     const email =user?.email;
    fetch(`https://stormy-crag-70028.herokuapp.com/user/${email}`,{
        method: 'PUT',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(userprofile)
      })
      .then(res=>res.json())
      .then(data=>{
        toast.success('User profile Updated')
      })
    
    
    console.log(user)
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-20 text-center">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-teal-500">{user?.displayName}</h2>
        <p>Email : {user?.email}</p>
        <form onSubmit={handleSubmit}>
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
          className="input input-bordered w-full max-w-xs my-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone-Number"
          className="input input-bordered w-full max-w-xs "
        />
        <input
          type="text"
          name="education"
          placeholder="education"
          className="input input-bordered w-full max-w-xs my-2"
        />
           <input
          type="text"
          name="location"
          placeholder="location"
          className="input input-bordered w-full max-w-xs"
          
        />
             <input
          type="text"
          name="linkedin"
          placeholder="linkedin-profile"
          className="input input-bordered w-full max-w-xs my-2"
          
        />
        <input
          type="submit"
          value="Update Profile"
          className="btn btn-accent  w-full max-w-xs"
        />
        </form>
      
        <div className="card-actions justify-end">
        
        </div>
        <p className="text-xl">You can Visit your profile here </p>
        <Link to='/dashboard/myprofile' className="btn btn-accent mx-auto">My profile Details</Link>
      </div>
    </div>
  );
};

export default MyprofileInfo;

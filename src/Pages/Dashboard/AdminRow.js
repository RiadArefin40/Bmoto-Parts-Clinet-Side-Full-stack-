import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';

const AdminRow = ({user,refetch}) => {
    const [fuser, loading, error] = useAuthState(auth);
    
    const handleAdmin=()=>{
        const Requesteremail=fuser?.email;
        const requester ={
            email:Requesteremail
        }
        console.log(user.email,fuser.email)
        fetch(`https://stormy-crag-70028.herokuapp.com/user/admin/${user.email}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
              },
            body: JSON.stringify(requester)
        })
        .then(res=>
           
             res.json()
        )
        .then(data=>{
            if(data.modifiedCount>0){
                refetch();
                toast.success('successfully made an admin')
            }
            else{
                
                    toast.error('Not Permitted to make admin')
                
            }
          
        })
    }
    return (
       
              
              
                <tr>
             
                   
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user.role !== 'admin' && <button onClick={handleAdmin} className="btn btn-xs btn-success">Make-Admin</button>}</td>
                  </tr>
                
          
           
          
         
      
    );
};

export default AdminRow;
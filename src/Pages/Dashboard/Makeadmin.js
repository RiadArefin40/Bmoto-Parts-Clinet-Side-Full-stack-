import React from 'react';
import { QueryClient, useQuery, QueryClientProvider } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import AdminRow from './AdminRow';
const Makeadmin = () => {
    
    const {data:users,isLoading,refetch}= useQuery('users',()=> fetch('https://stormy-crag-70028.herokuapp.com/users').then(res=>res.json()))
    
   
     if(isLoading){
        return <Loading></Loading>
    }
 

    return (
        <div className="overflow-x-auto mt-10 mx-10">
        <table className="table w-full">
        
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
              {
                users.map((user,index)=><AdminRow key={user._id} user={user} refetch={refetch} ></AdminRow>)
                }
          
           
          
          </tbody>
        </table>
      </div>
    );
};

export default Makeadmin;
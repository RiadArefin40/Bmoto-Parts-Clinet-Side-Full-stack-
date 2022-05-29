import { useEffect, useState } from "react"

const useAdmin = user=>{
    const [admin,setAdmin] = useState(false);
    const [adminLoadning,setAdminLoading]= useState(true);
    useEffect(()=>{
       const email = user?.email;
      
        if (email){
            fetch(`https://stormy-crag-70028.herokuapp.com/admin/${email}` , {
                method:'GET',
                headers:{
                    'content-type':'application/json'
                },
               
            })
            .then(res=>res.json())
            .then(data =>{
               setAdmin(data.admin);
               setAdminLoading(false)
            })
       }
    
    },[user])
    return [admin, adminLoadning]
}
export default useAdmin;
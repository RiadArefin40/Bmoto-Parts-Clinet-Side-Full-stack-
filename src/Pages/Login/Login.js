import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase.init";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from "../Shared/Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const   signIn=async()=>{
   await signInWithGoogle();
 
    
  }


  let signInErrorMessage;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/'

  useEffect(()=>{
    if (user||guser) {
        
        navigate(from,{replace: true});
      }
  },[user,guser,from,navigate])
  if( loading || gloading){
      return <Loading></Loading>
  }
 
  if(error || gerror){
      signInErrorMessage = <p className="text-red-500">{error?.message || gerror?.message}</p>
  }
  
  const onSubmit = (data) => {
    
    console.log(data);
    signInWithEmailAndPassword(data.email,data.password)

  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl font-bold">Login!</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
               
              </label>
              <input
                type="email"
                placeholder="Type Your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email",  {
                    required:{
                        value:true,
                        message:'email is required'
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                      message: 'provide a valid email' // JS only: <p>error message</p> TS only support string
                    }
                  })}
              />
              <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                
              {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} 
              </label>
            </div>


            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
               
              </label>
              <input
                type="password"
                placeholder="Type Your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password",  {
                    required:{
                        value:true,
                        message:'password is required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Min Length must be 6' // JS only: <p>error message</p> TS only support string
                    }
                  })}
              />
              <label className="label">
              {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                
              {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>} 
              </label>
            </div>
           
          
            {signInErrorMessage}
            <input className="btn w-full text-white" type="submit" value='login' />
          </form>
           <p>Already Have an account <Link className="text-secondary" to='/signup'>Please SignUp</Link></p>
          <div className="divider">OR</div>
          <button
            onClick={() => signIn()}
            className="btn btn-outline btn-accent"
          >
            Continue wuth google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../config.js/BaseUrl';

export const Login = () => {
    const navigate = useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(email,password);
        try{
          const res=await fetch(`${BASE_URL}/api/auth/login`,{
            method:"Post",
            headers:{
              "Content-Type":"application/json",

            },
            credentials:"include",
            body:JSON.stringify({email,password}),
          });
          const data=await res.json();
          console.log(data);
         if (data.success) {
  if (data.user.role === "admin") {
    navigate("/all-users");  // ✅ Go to Admin route
  } else {
    navigate("/");   // ✅ Go to Home page
  }
} else {
  alert("Login failed: " + data.msg);
}

        }
      

        catch(error){
          console.error(error);
        }
    }
  return (
<>
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <form
    className="bg-white p-6 pt-4 rounded shadow-md w-80"

onSubmit={handleSubmit}
>
    <h2 className="text-xl font-semibold mb-4">Login</h2>
    <input type="email" 
    placeholder="Email"
   className="w-full mb-3 p-2 mt-2 border-1 rounded-2xl"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    required
    
    />
     <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 mt-2 border-1 rounded-2xl"
 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
       <button
          type="submit"
           className="w-16 bg-blue-500  text-white py-2 rounded hover:bg-blue-600"
             
        >
          Login
        </button>

        <p>Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link></p>


</form>



  


  </div>

</>
  )
}
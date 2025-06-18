import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../config.js/BaseUrl';

export const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        const res=await fetch(`${BASE_URL}/api/auth/register`,{
        method:"POST",
        headers:{"Content-type":"application/json"},
         body: JSON.stringify({ name, email, password }),
        credentials: "include",

        });
            const data = await res.json();
            console.log(data);
      if (data.success) {
       navigate("/");

        alert("Registration successful!");
      } else {
        alert("Registration failed: " + data.msg);
      }

    }
     catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
   }
   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-6 pt-4 rounded shadow-md w-80"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold mb-4">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 mt-2 border rounded-2xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 mt-2 border rounded-2xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 mt-2 border rounded-2xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-16 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>


<p>Already have an account? <Link to="/login" className="text-blue-500">Login here</Link></p>

      </form>
    
    </div>
  );

}

import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../config.js/BaseUrl';
export const Home = () => {
    const navigate = useNavigate();

    const [user, setuser] = useState(null);
    useEffect(() => {
    const fetchUser=async()=>{
        try{
            const res=await fetch(`${BASE_URL}/api/auth/userData`,{
             method:"GET",
             credentials:"include",   
            })
            const data=await res.json();
            console.log(data);
            if(data.success){
                setuser(data.user);
            }
            else{
                console.log(data.msg);
            }
        }
        catch(err){
            console.error("error fetching user:",err);
        }

    }
    fetchUser();
    
    }, [])
    
  return (
    <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome {user?.name}!</h2>
        <p className="mb-2 text-gray-700">Email: {user?.email}</p>
        <button
          className="mt-4  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300"
          onClick={async () => {
            await fetch(`${BASE_URL}/api/auth/logout`, {
              method: "POST",
              credentials: "include",
            });
             navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
    
    </>
  )
}

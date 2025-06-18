import React, { useEffect, useState } from 'react'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { AllUsers } from './components/AllUsers'
import { ProtectRouter } from './components/ProtectRouter'
import { Unauthorized } from './components/Unauthorized'
import BASE_URL from './config.js/BaseUrl'

export const App = () => {

 const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/auth/userData`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.success) {
          setIsAuthenticated(true);
          setUserRole(data.user.role); 
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);












  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectRouter 
        isAuthenticated={isAuthenticated}
        allowedRoles={['user','admin']}
        userRole={userRole}
     ><Home/></ProtectRouter> }
        
        
        />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
          <Route
          path="/all-users"
          element={
            <ProtectRouter
              isAuthenticated={isAuthenticated}
              allowedRoles={['admin']}
              userRole={userRole}
            >
              <AllUsers/>
            </ProtectRouter>
          }
        />
          <Route path="/unauthorized" element={<Unauthorized />} /> 
    </Routes>
    
    </>
  )
}

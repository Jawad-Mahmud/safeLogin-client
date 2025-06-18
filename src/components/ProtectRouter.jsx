import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectRouter = ({children,isAuthenticated,userRole,allowedRoles}) => {
  if(!isAuthenticated){
    return <Navigate to ="/login" replace/>

  }
  if(allowedRoles && !allowedRoles.includes(userRole)){
    return <Navigate to="/unauthorized" replace/>

  }
  return children
}

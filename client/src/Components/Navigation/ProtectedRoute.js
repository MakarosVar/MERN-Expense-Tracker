import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';


export const ProtectedRoute= ({children}) => {
    const { userAuth } = useSelector(state => state?.users)
    return userAuth ? children : <Navigate replace to="/login" />
 }

export default ProtectedRoute;
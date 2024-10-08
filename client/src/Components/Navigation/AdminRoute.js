import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';


export const AdminRoute = ({children}) => {
    const { userAuth } = useSelector(state => state?.users)
    return userAuth && userAuth?.isAdmin ? children : <Navigate replace to="/not-found" />
 }

export default AdminRoute;
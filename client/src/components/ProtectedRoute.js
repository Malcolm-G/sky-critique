import React, { useContext } from 'react';
import { UserContext } from './UserDataProvider';
import { Navigate, Route, useNavigate, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
    const [API, user, setUser,myBookings,setMyBookings] = useContext(UserContext)
    // const navigate = useNavigate()
    const storedUser = JSON.parse(localStorage.getItem("user"))
    return (
        storedUser 
        ? props.outlet
        : <Navigate to='/login' />
    );
}

export default ProtectedRoute;
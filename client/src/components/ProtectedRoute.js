import React, { useContext } from 'react';
import { UserContext } from './UserDataProvider';
import { Navigate, Route, useNavigate, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
    const [user] = useContext(UserContext)
    // const navigate = useNavigate()
    return (
        user 
        ? props.outlet
        : <Navigate to='/login' />
    );
}

export default ProtectedRoute;
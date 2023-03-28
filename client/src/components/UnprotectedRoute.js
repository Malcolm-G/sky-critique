// based off this code sand box: https://codesandbox.io/s/p71pr7jn50

import React from 'react'
import { Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { AuthConsumer } from './AuthContext'

// Redirect users away from these routes if they are already logged in
const UnprotectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) => (
      <Route
        render={props =>
          !isAuth ? <Component {...props} /> : <Navigate to="/" />
        }
        {...rest}
      />
    )}
  </AuthConsumer>
)

export default UnprotectedRoute
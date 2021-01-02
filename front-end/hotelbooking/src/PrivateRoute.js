import React from 'react'
import AuthService from './services/Login/auth.service'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const isLoggedIn = AuthService.getCurrentUser()
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
            <div>
              <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            </div>
          )
      }
    />
  )
}

export default PrivateRoute
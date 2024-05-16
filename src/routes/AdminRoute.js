import React from 'react';
import { Route } from 'react-router-dom';


const AdminRoute = ({ component: Component, ...rest }) => {
  const userRole = localStorage.getItem('role');

  return (
    <Route
      {...rest}
      render={props =>
        userRole === '0' ? (
          <Component {...props} />
        ) : (
          window.location.href = '/'
        )
      }
    />
  );
};

export default AdminRoute;

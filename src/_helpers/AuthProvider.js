// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { accountService } from '@/_service/account.service';

// const AuthProvider = ({children}) => {

//     if(!accountService.isLoggedIn()){
//         return <Navigate to="/auth" />
//     }

//     return children
// };

// export default AuthProvider;


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '@/_service/account.service';

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const isLoggedIn = await accountService.isLoggedIn();
      if (!isLoggedIn) {
        navigate('/auth', { replace: true });
      }
    };

    checkAuth();
  }, [navigate]);

  return children;
};

export default AuthProvider;
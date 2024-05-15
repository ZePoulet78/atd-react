import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '@/_service/account.service';

const AdminProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const isLoggedIn = await accountService.isLoggedIn();
      if (!isLoggedIn || localStorage.getItem('role') !== '0') {
        navigate('/', { replace: true });
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return children;
};

export default AdminProvider;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PendingProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth =  () => {
      if (localStorage.getItem('isRegistered') !== '0'){
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

export default PendingProvider;
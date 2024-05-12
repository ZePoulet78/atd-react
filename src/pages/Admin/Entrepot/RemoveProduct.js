import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StockService } from '@/_service/stock.service';

const RemoveProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  useEffect(() => {
    StockService.removeProductFromWarehouse(productId)
      .then(() => {
        navigate('/admin/entrepot/index');
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  }, [productId, navigate]);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return <div>Suppression du produit...</div>;
};

export default RemoveProduct;
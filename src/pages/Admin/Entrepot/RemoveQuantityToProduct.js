import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StockService } from '@/_service/stock.service';

const RemoveQuantityFromProduct = () => {
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');
  const { productId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const produit = { quantity: parseInt(quantity) };
    StockService.RemoveQuantityFromStock(productId, produit)
      .then(() => {
        navigate('/admin/entrepot/index');
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  };

  return (
    <div>
      <h2>Retirer la quantité du produit</h2>
      {error && <div>Erreur : {error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Quantité à retirer :
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button type="submit">Retirer la quantité</button>
      </form>
    </div>
  );
};

export default RemoveQuantityFromProduct;
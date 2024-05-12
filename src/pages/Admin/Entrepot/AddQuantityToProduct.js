import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StockService } from '@/_service/stock.service';

const AddQuantityToProduct = () => {
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');
  const { productId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const produit = { quantity: parseInt(quantity) };
    StockService.addQuantityToStock(productId, produit)
      .then(() => {
        navigate('/admin/entrepot');
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  };

  return (
    <div>
      <h2>Ajouter la quantité au produit</h2>
      {error && <div>Erreur : {error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Quantité à ajouter :
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button type="submit">Ajouter la quantité</button>
      </form>
    </div>
  );
};

export default AddQuantityToProduct;
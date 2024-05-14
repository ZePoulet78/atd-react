import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StockService } from '@/_service/stock.service';
import { Link } from 'react-router-dom';

const ProduitsByWarehouse = () => {
  const [produits, setProduits] = useState([]);
  const [error, setError] = useState('');
  const { warehouseId } = useParams();

  useEffect(() => {
    fetchProduits();
  }, [warehouseId]);

  const fetchProduits = () => {
    StockService.getProduitByWarehouseId(warehouseId)
      .then(response => {
        setProduits(response.data.prod);
        console.log(response);
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  };

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
      <h2>Produits dans l'entrepôt {warehouseId}</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Quantité</th>
            <th>Date d'expiration</th>
          </tr>
        </thead>
        <tbody>
          {produits.map(produit => (
            <tr key={produit.id}>
              <td>{produit.name}</td>
              <td>{produit.quantity}</td>
              <td>{produit.expiration_date}</td>
              <Link to={`/admin/entrepot/prod/add-quantity/${produit.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                          +
                        </button>
              </Link>

              <Link to={`/admin/entrepot/prod/remove-quantity/${produit.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                          -
                        </button>
              </Link>
              <Link to={`/admin/entrepot/prod/remove/${produit.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                          Supprimer
                        </button>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProduitsByWarehouse;
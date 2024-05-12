import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StockService } from '@/_service/stock.service';

const ProduitsByWarehouse = () => {
  const [produit, setProduit] = useState([]);
  const { warehouseId } = useParams();

//   useEffect(() => {
//     fetchProduits();
//   }, [warehouseId]);

  const fetchProduits = () => {
    StockService.getProduitByWarehouseId(warehouseId)
      .then(response => {
        setProduit(response.data.prod);
      })
      .catch(error => {
        console.log(error);
      });
  };

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
          {produit.map(produit => (
            <tr key={produit.id}>
              <td>{produit.name}</td>
              <td>{produit.quantity}</td>
              <td>{produit.expiration_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProduitsByWarehouse;
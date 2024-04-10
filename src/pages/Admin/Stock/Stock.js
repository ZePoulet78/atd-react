import React, { useState, useEffect } from 'react';
import { stockService } from '@/_service/stock.service';




const Stock = () => {
  const [stock, setStock] = useState([]);


  useEffect(() => {
      
    stockService.getAllStock()
        .then(res => {
                setStock(res.data.prod)
            })
        .catch(console.log("error"))
    
}, [])



  if (!Array.isArray(stock) || stock.length === 0) {
    return <div>Aucune donnée à afficher.</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Gestion des Stocks</h2>
      <table className="table border rounded table-rounded">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Email</th>
            <th scope="col">Téléphone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {stock.map(stock => (
            <tr key={stock.id}>
              <th scope="row">{stock.id}</th>
              <td>{stock.name}</td>
              <td>{stock.quantity}</td>
              <td>{stock.expiration_date}</td>
              <td>{stock.type}</td>
              <td>
                <button className="bi bi-eye"><img src="/eyes.svg"></img></button>
                <button className="btn btn-primary btn-sm">Modifier</button>
                <button className="btn btn-danger btn-sm">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Stock;

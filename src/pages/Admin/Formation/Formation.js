import React, { useState, useEffect } from 'react';
import { formationService } from '@/_service/formation.service';
import { Link } from 'react-router-dom';




const Formation = () => {
  const [formation, setFormation] = useState([]);


  useEffect(() => {
      
    formationService.getAllFormation()
        .then(res => {
                setFormation(res.data.formations)
            })
        .catch(err => console.log(err))
    
}, [])

const delFormation = (formationId) => {
  formationService.deleteFormation(formationId)
      .then(res => {
          
          setFormation((current) => current.filter(formation => formation.id !== formationId))
      })
      .catch(err => console.log(err))
}



  if (!Array.isArray(formation) || formation.length === 0) {
    return <div>Aucune donnée d'utilisateur à afficher.</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Gestion des Formations</h2>
      <Link to ="/admin/formation/add/"><button className="btn btn-primary btn-sm">Ajouter</button></Link>
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
          {formation.map(formation => (
            <tr key={formation.id}>
              <th scope="row">{formation.id}</th>
              <td>{formation.nom}</td>
              <td>{formation.date_debut}</td>
              <td>{formation.date_fin}</td>
              <td>{formation.time}</td>
              <td>{formation.but}</td>
              <td>{formation.description}</td>
              <td>{formation.lieu}</td>
              <td>
                <button className="bi bi-eye"><img src="/eyes.svg"></img></button>
                <Link to ={`/admin/formation/edit/${formation.id}`}><button className="btn btn-primary btn-sm">Modifier</button></Link>
                <button className="btn btn-danger btn-sm" onClick={() => delFormation(formation.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Formation;

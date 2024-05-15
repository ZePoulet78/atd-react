import React, { useState, useEffect } from 'react';
import { activityService } from '@/_service/activity.service';
import { Link } from 'react-router-dom';

const Act = () => {
  const [activity, setActivity] = useState([]);


  useEffect(() => {
      
    activityService.getAllActivity()
        .then(res => {
                setActivity(res.data.activity)
            })
        .catch(console.log("error"))
    
}, [])

const delAct = (actId) => {
  activityService.deleteUser(actId)
    .then(res => {
      setActivity((current) => current.filter(activity => activity.id !== actId));
    })
    .catch(err => console.log(err));
};



  if (!Array.isArray(activity) || activity.length === 0) {
    return (
      <div>
          <div>Aucune donnée à afficher.</div>
          <Link to ="/admin/activity/add/"><button className="btn btn-primary btn-sm">Ajouter</button></Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Gestion des Activity</h2>
      <Link to ="/admin/activity/add/"><button className="btn btn-primary btn-sm">Ajouter</button></Link>
      <table className="table border rounded table-rounded">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titre</th>
            <th scope="col">Heure Début</th>
            <th scope="col">Heure Fin</th>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Lieu</th>
            <th scope='col'>Max. Bénévoles</th>
            <th scope='col'>Nb. Bénévoles Actuellement</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activity.map(activity => (
            <tr key={activity.id}>
              <th scope="row">{activity.id}</th>
              <td>{activity.description}</td>
              <td>{activity.heure_debut}</td>
              <td>{activity.heure_fin}</td>
              <td>{activity.date}</td>
              <td>{activity.type}</td>
              <td>{activity.lieu}</td>
              <td>{activity.max_users}</td>
              <td>{activity.actual_users}</td>
              <td>
                <button className="bi bi-eye"><img src="/eyes.svg"></img></button>
                <Link to ={`/admin/activity/edit/${activity.id}`}><button className="btn btn-primary btn-sm">Modifier</button></Link>
                <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                        onClick={() => delAct(activity.id)}
                      >
                        Supprimer
                      </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Act;

import React, { useState, useEffect } from 'react';
import { activityService } from '@/_service/activity.service';
import { Link } from 'react-router-dom';


const IndexActivitites = () => {
  const [activity, setActivity] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
      
    activityService.getAllActivity()
        .then(res => {
                setActivity(res.data.activity)
                setError(null)
            })
        .catch(err => console.error(err))
    
}, [])

const join = (actId) => {
  activityService.makeActivity({
    user_id: localStorage.getItem('id'),
    activity_id: actId
  })
    .then(res => {
      window.location.reload();
    })
    .catch(err => setError(err.response.data.error));
};



  if (!Array.isArray(activity) || activity.length === 0) {
    return (
      <div>
          <div>Aucune donnée à afficher.</div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Toutes les Activités</h2>
      {error && <div className="alert alert-danger">{error}</div>}  
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
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                onClick={() => join(activity.id)}
              >
                Rejoindre
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default IndexActivitites;
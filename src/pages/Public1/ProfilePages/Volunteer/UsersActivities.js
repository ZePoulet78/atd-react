import React, { useState, useEffect } from 'react';
import { activityService } from '@/_service/activity.service';
import { Link } from 'react-router-dom';

const UsersActivities = () => {
    const [userActivities, setUserActivities] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      activityService.getUsersActivities(localStorage.getItem('id'))
        .then(res => {
          setUserActivities(res.data.activity);
          setError(null);
        })
        .catch(err => setError(err.message)) 
    }, []);
  
    const del = (actId) => {
      activityService.undoActivity(actId)
        .then(res => {
          window.location.reload();
        })
        .catch(err => {
            setError(err.message)
            console.log(err.response.data.error)
        });
    };

  return (
    <div className="container mt-5">
      <h2>Mes Activités</h2>
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
          {userActivities.map(userActivity => (
            <tr key={userActivity.activity_id}>
              <th scope="row">{userActivity.activity_id}</th>
              <td>{userActivity.activity.description}</td>
              <td>{userActivity.activity.heure_debut}</td>
              <td>{userActivity.activity.heure_fin}</td>
              <td>{userActivity.activity.date}</td>
              <td>{userActivity.activity.type}</td>
              <td>{userActivity.activity.lieu}</td>
              <td>{userActivity.activity.max_users}</td>
              <td>{userActivity.activity.actual_users}</td>
              <td>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                  onClick={() => del(userActivity.id)}
                >
                  Désinscrire
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersActivities;

import React, { useState, useEffect } from 'react';
import { maraudeService } from '@/_service/maraude.service';
import { Link } from 'react-router-dom';


const IndexMaraudes = () => {
  const [maraude, setMaraude] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
      
    maraudeService.indexMaraude()
        .then(res => {
                setMaraude(res.data.maraudes)
                console.log(res.data);
                setError(null)
            })
        .catch(err => console.error(err))
    
}, [])

const join = (actId) => {
    maraudeService.makeMaraude({
    user_id: localStorage.getItem('id'),
    maraude_id: actId
  })
    .then(res => {
      window.location.reload();
    })
    .catch(err => setError(err.response.data.message));
};



  if (!Array.isArray(maraude) || maraude.length === 0) {
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
            <th scope="col">Date</th>
            <th scope="col">Heure Début</th>
            <th scope="col">Heure Fin</th>
            <th scope="col">Véhicule</th>
            <th scope="col">Chauffeur</th>
            <th scope="col">Plan de route</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {maraude.map(maraude => (
            <tr key={maraude.id}>
              <th scope="row">{maraude.id}</th>
              <td>{maraude.maraud_date}</td>
              <td>{maraude.departure_time}</td>
              <td>{maraude.return_time}</td>
              <td>{maraude.vehicle.model} {maraude.vehicle.year}</td>
              <td>{maraude.user.firstname} {maraude.user.lastname}</td>
              <td className="py-2 md:py-4 px-4 md:px-6">
                {maraude.itinerary? (
                    <a href={maraude.itinerary} target="_blank" rel="noreferrer">
                    Plan de route
                    </a>
                ) : (
                    "Aucun plan de route"
                )}
              </td>   
              <td>           
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                onClick={() => join(maraude.id)}
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


export default IndexMaraudes;
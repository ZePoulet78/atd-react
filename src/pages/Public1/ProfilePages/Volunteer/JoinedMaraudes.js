import React, { useState, useEffect } from 'react';
import { maraudeService } from '@/_service/maraude.service';
import { Link } from 'react-router-dom';

const JoinedMaraudes = () => {
    const [usersMaraudes, setUsersMaraudes] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        maraudeService.getUsersMaraudes(localStorage.getItem('id'))
        .then(res => {
            setUsersMaraudes(res.data.maraudes || []);
            console.log(res.data.maraude);
            setError(null);
        })
        .catch(err => setError(err.message)) 
    }, []);
  
    const del = (mId) => {
        maraudeService.undoMaraude(localStorage.getItem('id'), mId)
        .then(res => {
          window.location.reload();
        })
        .catch(err => {
            setError(err.message);
            console.log(err.response.data.error);
        });
    };

    return (
        <div className="container mt-5">
            <h2>Mes Maraudes</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <table className="table border rounded table-rounded">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Heure Début</th>
                        <th scope="col">Heure Fin</th>
                        <th scope="col">Véhicule</th>
                        <th scope="col">Plan de route</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {usersMaraudes.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="text-center">Aucune activité trouvée</td>
                        </tr>
                    ) : (
                        usersMaraudes.map(usersMaraude => (
                            <tr key={usersMaraude.id}>
                                <th scope="row">{usersMaraude.id}</th>
                                <td>{usersMaraude.maraude.maraud_date}</td>
                                <td>{usersMaraude.maraude.departure_time}</td>
                                <td>{usersMaraude.maraude.return_time}</td>
                                <td>{usersMaraude.maraude.vehicle_id}</td>
                                <td>
                                    <a href={usersMaraude.maraude.itinerary} target="_blank" rel="noopener noreferrer">
                                        Voir plan
                                    </a>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => del(usersMaraude.id)}
                                    >
                                        Désinscrire
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default JoinedMaraudes;

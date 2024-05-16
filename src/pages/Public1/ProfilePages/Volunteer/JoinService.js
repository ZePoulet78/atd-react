import React, { useState, useEffect } from 'react';
import { serviceBenevolatService } from '@/_service/service.service';

const VolunteeringsPage = () => {
    const [volunteerings, setVolunteerings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        serviceBenevolatService.index()
            .then(res => {
                setVolunteerings(res.data.volunteerings);
            })
            .catch(err => {
                console.error(err);
                setError('Une erreur s\'est produite lors du chargement des bénévolats.');
            });
    }, []);

    const handleJoinVolunteering = (id) => {
        serviceBenevolatService.joinVolunteering(id)
            .then(res => {
                console.log(res.data.message);
         
                setVolunteerings(prevVolunteerings => prevVolunteerings.map(volunteering => {
                    if (volunteering.id === id) {
                        return { ...volunteering, joined: true };
                    }
                    return volunteering;
                }));
            })
            .catch(err => {
                console.error(err);
                setError('Une erreur s\'est produite lors de l\'inscription au bénévolat, le bénévolat est complet');
            });
    };

    return (
        <div className="container mt-4">
            <h2>Liste des bénévolats</h2>
            
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            <table className="table">
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Heure</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {volunteerings.map(volunteering => (
                        <tr key={volunteering.id}>
                            <td>{volunteering.title}</td>
                            <td>{volunteering.description}</td>
                            <td>{volunteering.date}</td>
                            <td>{volunteering.heure}</td>
                            <td>
                                {volunteering.joined ? (
                                    <button className="btn btn-secondary" disabled>Déjà inscrit</button>
                                ) : (
                                    <button className="btn btn-primary" onClick={() => handleJoinVolunteering(volunteering.id)}>S'inscrire</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VolunteeringsPage;

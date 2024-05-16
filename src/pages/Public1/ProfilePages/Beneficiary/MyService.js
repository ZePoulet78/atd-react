import React, { useState, useEffect } from 'react';
import { serviceBenevolatService } from '@/_service/service.service';
import { Link } from 'react-router-dom';


const VolunteeringsByUserPage = () => {
    const [volunteerings, setVolunteerings] = useState([]);

    useEffect(() => {
        serviceBenevolatService.getVolunteeringsByUser()
            .then(res => setVolunteerings(res.data.volunteerings))
            .catch(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        serviceBenevolatService.deleteServiceBenevolat(id)
            .then(res => {
                setVolunteerings(volunteerings.filter(volunteering => volunteering.id !== id));
                console.log('Bénévolat supprimé avec succès');
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-4">
            <h2>Vos Demande de bénévolats</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Heure</th>
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
                                <Link to={`/profile/myservice/edit/${volunteering.id}`} className="btn btn-primary mr-2">Modifier</Link>
                                <button onClick={() => handleDelete(volunteering.id)} className="btn btn-danger">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VolunteeringsByUserPage;

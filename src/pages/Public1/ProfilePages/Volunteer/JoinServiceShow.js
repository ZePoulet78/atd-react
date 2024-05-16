import React, { useState, useEffect } from 'react';
import { serviceBenevolatService } from '@/_service/service.service';

const MyVolunteeringsPage = () => {
    const [volunteerings, setVolunteerings] = useState([]);

    useEffect(() => {
        serviceBenevolatService.getVolunteerServices()
            .then(res => {
                setVolunteerings(res.data.volunteerServices);
            })
            .catch(err => console.error(err));
    }, []);

    const handleLeaveVolunteering = (id) => {
        serviceBenevolatService.leaveVolunteering(id)
            .then(res => {
                console.log(res.data.message);
                setVolunteerings(prevVolunteerings => prevVolunteerings.filter(volunteering => volunteering.id !== id));
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-4">
            <h2>Mes bénévolats</h2>
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
                                <button className="btn btn-danger" onClick={() => handleLeaveVolunteering(volunteering.id)}>Se désinscrire</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyVolunteeringsPage;

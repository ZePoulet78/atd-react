import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { maraudeService } from '@/_service/maraude.service';
import { vehicleService } from '@/_service/vehicle.service';
import { userService } from '@/_service/user.service';

const MaraudeEdit = () => {
    const [maraude, setMaraude] = useState({});
    const [vehicles, setVehicles] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {

        vehicleService.getAllVehicles()
            .then(res => {
                setVehicles(res.data);
            })
            .catch(err => console.log(err));

        userService.showUsersByRole(2)
            .then(res => {
                setUsers(res.data.users); 
            })
            .catch(err => console.log(err));

        maraudeService.getMaraudeById(id)
            .then(res => {
                setMaraude(res.data.maraude);
                console.log(res.data.maraude);
            })
            .catch(err => console.log(err));
        
    }, []);

    const onChange = (e) => {
        setMaraude({
            ...maraude,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(maraude);
        maraudeService.updateMaraude(maraude)

            .then(res => navigate('../index'))
            .catch(err => setError(err.response.data.message));
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Ajouter une maraude</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date de collecte</label>
                            <input value={maraude.maraud_date} type="date" className="form-control" name="maraud_date" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="departure_time" className="form-label">Heure de départ</label>
                            <input value={maraude.departure_time} type="time" className="form-control" name="departure_time" onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="return_time" className="form-label">Heure de retour</label>
                            <input value={maraude.return_time} type="time" className="form-control" name="return_time" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="id_vehicule" className="form-label">Véhicule</label>
                            <select className="form-select" name="vehicle_id" onChange={onChange}>
                                <option value="">Sélectionnez un véhicule</option>
                                {vehicles.map(vehicle => (
                                    <option key={vehicle.id} value={vehicle.id}>{vehicle.model} {vehicle.year}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="driver_id" className="form-label">Chauffeur</label>
                            <select className="form-select" name="user_id" onChange={onChange}>
                                <option value="">Sélectionnez un chauffeur</option>
                                {users.map(user => (
                                    <option key={user.id} value={user.id}>{user.firstname} {user.lastname}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MaraudeEdit;

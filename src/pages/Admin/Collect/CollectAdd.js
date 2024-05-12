import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collectService } from '@/_service/collect.service';
import { vehicleService } from '@/_service/vehicle.service';
import { userService } from '@/_service/user.service';

const CollectAdd = () => {
    const [collect, setCollect] = useState({
        date: '',
        id_vehicule: '',
        id_user: ''
    });
    const [vehicles, setVehicles] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    
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
    }, []);

    const onChange = (e) => {
        setCollect({
            ...collect,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        collectService.addCollect(collect)

            .then(res => navigate('../index'))
            .catch(err => setError(err.response.data.message));
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Ajouter une collecte</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date de collecte</label>
                            <input type="date" className="form-control" name="date" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="id_vehicule" className="form-label">Véhicule</label>
                            <select className="form-select" name="id_vehicule" onChange={onChange}>
                                <option value="">Sélectionnez un véhicule</option>
                                {vehicles.map(vehicle => (
                                    <option key={vehicle.id} value={vehicle.id}>{vehicle.model} {vehicle.year}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="driver_id" className="form-label">Chauffeur</label>
                            <select className="form-select" name="id_user" onChange={onChange}>
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

export default CollectAdd;

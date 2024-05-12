import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { vehicleService } from '@/_service/vehicle.service';
import { entrepotsService } from '@/_service/entrepot.service';

const VehicleAdd = () => {
    const [vehicle, setVehicle] = useState({
        registration_number: '',
        model: '',
        year: '',
        warehouse_id: ''
    });
    const [entrepots, setEntrepots] = useState([]);
    const [registrationError, setRegistrationError] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        entrepotsService.getAllEntrepot()
            .then(res => {
                setEntrepots(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === 'registration_number') {
            const isValid = /^[A-Z]{2}-\d{3}-[A-Z]{2}$/i.test(value);
            if (!isValid) {
                setRegistrationError('La plaque doit être au format XX-YYY-XX, où X est une lettre majuscule et Y est un chiffre.');
            } else {
                setRegistrationError('');
            }
        }
        setVehicle({
            ...vehicle,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        vehicleService.addVehicle(vehicle)
            .then(res => navigate('../index'))
            .catch(err => console.log(err));
    };

    return (
        <div className="container d-flex justify-content-center mt-4">
            <div className="card" style={{ maxWidth: '500px' }}>
                <div className="card-body">
                    <h2 className="card-title">Ajouter un véhicule</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="registration_number" className="form-label">
                                Plaque d'Immatriculation
                                <small className="text-muted"> (ex: AB-123-CD)</small>
                            </label>
                            <input type="text" className={`form-control ${registrationError ? 'is-invalid' : ''}`} name="registration_number" value={vehicle.registration_number} onChange={onChange} maxLength="9" />
                            {registrationError && <div className="invalid-feedback">{registrationError}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="model" className="form-label">Modèle</label>
                            <input type="text" className="form-control" name="model" value={vehicle.model} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="year" className="form-label">Année</label>
                            <input type="tel" className="form-control" name="year" value={vehicle.year} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="warehouse_id" className="form-label">Entrepôt</label>
                            <select className="form-select" name="warehouse_id" value={vehicle.warehouse_id} onChange={onChange}>
                                <option value="">Sélectionnez un entrepôt</option>
                                {entrepots.map(entrepot => (
                                    <option key={entrepot.id} value={entrepot.id}>{entrepot.name}</option>
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

export default VehicleAdd;

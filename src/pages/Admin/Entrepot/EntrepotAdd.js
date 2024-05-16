import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { entrepotsService } from '@/_service/entrepot.service';

const EntrepotsAdd = () => {
    const [entrepots, setEntrepots] = useState({
        name: '',
        address: '',
        max_capacity: ''
    });
    let navigate = useNavigate();

    const onChange = (e) => {
        setEntrepots({
            ...entrepots,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        entrepotsService.addEntrepot(entrepots)
            .then(res => navigate('../index'))
            .catch(err => console.log(err));
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Ajouter un Entrepot</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input type="text" className="form-control" name="name" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Adresse</label>
                            <input type="text" className="form-control" name="address" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="max_capacity" className="form-label">Capacité Maximum</label>
                            <input type="number" className="form-control" name="max_capacity" onChange={onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EntrepotsAdd;

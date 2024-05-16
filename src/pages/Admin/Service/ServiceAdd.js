import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { serviceBenevolatService } from '@/_service/service.service';

const ServiceBenevolatAdd = () => {
    const [service, setService] = useState({
        name: ''
    });
    let navigate = useNavigate();

    const onChange = (e) => {
        setService({
            ...service,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        serviceBenevolatService.addService(service)
            .then(res => navigate('../index'))
            .catch(err => console.log(err));
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Ajouter un service de bénévolat</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input type="text" className="form-control" name="name" onChange={onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceBenevolatAdd;

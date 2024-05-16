import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { serviceBenevolatService } from '@/_service/service.service';

const ServiceBenevolatAdd = () => {
    const [formData, setFormData] = useState({
        serviceId: '',
        title: '',
        description: '',
        date: '',
        heure: ''
    });
    const [services, setServices] = useState([]);
    let navigate = useNavigate();


    useEffect(() => {
        serviceBenevolatService.indexServices()
            .then(res => {
                setServices(res.data.services);
               
            })
            .catch(err => console.error(err));
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        serviceBenevolatService.addVolunteering(formData)
            .then(res => navigate('../myservice'))
            .catch(err => console.log(err));
    };

    return (
        <div className="container mt-4">
            <h2>Ajouter un service de bénévolat</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Titre:</label>
                    <select className="form-control" id="title" name="title" value={formData.title} onChange={handleChange}>
                        <option value="">Sélectionner un titre</option>
                        {services.map(service => (
                            <option key={service.id} value={service.name}>{service.name}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} rows="5"></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date:</label>
                    <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="heure" className="form-label">Heure:</label>
                    <input type="time" className="form-control" id="heure" name="heure" value={formData.heure} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    );
};


export default ServiceBenevolatAdd;

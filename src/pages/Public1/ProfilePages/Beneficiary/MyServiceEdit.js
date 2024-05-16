import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { serviceBenevolatService } from '@/_service/service.service';

const VolunteeringsEditPage = () => {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        heure: ''
    });

    const [services, setServices] = useState([]);
 


    useEffect(() => {
        serviceBenevolatService.indexServices()
            .then(res => {
                setServices(res.data.services);
               
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        console.log(id);
        serviceBenevolatService.showServiceBenevolat(id)
            .then(res => {
                setFormData({
                    title: res.data.volunteering.title,
                    description: res.data.volunteering.description,
                    date: res.data.volunteering.date,
                    heure: res.data.volunteering.heure
                    
                });
                console.log(res.data.volunteering);
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        serviceBenevolatService.updateServiceBenevolat(id, formData)
            .then(res => {
                console.log('Bénévolat modifié avec succès');
                window.location.href = '/profile/myservice/index'; 
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-4">
            <h2>Modifier le bénévolat</h2>
            <form onSubmit={handleSubmit}>
            <select className="form-control" id="title" name="title" value={formData.title} onChange={handleChange}>
                        <option value="">Sélectionner un titre</option>
                        {services.map(service => (
                            <option key={service.id} value={service.name}>{service.name}</option>
                        ))}
                    </select>
                {/* <div className="mb-3">
                    <label htmlFor="title" className="form-label">Titre:</label>
                    <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} />
                </div> */}
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
                <button type="submit" className="btn btn-primary">Modifier</button>
            </form>
        </div>
    );
};

export default VolunteeringsEditPage;


import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { vehicleService } from '@/_service/vehicle.service';


const VehicleAdd = () => {
    const [vehicle, setVehicle] = useState([])
    let navigate = useNavigate()


    const onChange = (e) => {
        setVehicle({
            ...vehicle,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        vehicleService.addVehicle(vehicle)
            .then(res => navigate('../index'))
            .catch(err => console.log(err))
    }

    return (
        <div className="VehcicleAdd">
            Ajouter un véhicule
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="tel">tel</label>
                    <input type="tel" name="tel" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" onChange={onChange} />
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default VehicleAdd;
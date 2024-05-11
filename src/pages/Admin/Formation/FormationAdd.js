
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { formationService } from '@/_service/formation.service';

const FormationAdd = () => {
    const [formation, setFormation] = useState([])
    let navigate = useNavigate()


    const onChange = (e) => {
        setFormation({
            ...formation,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        formationService.addFormation(formation)
            .then(res => navigate('../index'))
            .catch(err => console.log(err))
    }

    return (
        <div className="FormationEdit">
            Formation Edit
            <form onSubmit={onSubmit}>
            <div className="group">
                    <label htmlFor="nom">date_debut</label>
                    <input type="text" name="nom" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="date_debut">date_debut</label>
                    <input type="date" name="date_debut" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="date_fin">date_fin</label>
                    <input type="date" name="date_fin" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="time">time</label>
                    <input type="number" name="time" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="but">but</label>
                    <input type="text" name="but" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="description">description</label>
                    <input type="text" name="description" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="lieu">lieu</label>
                    <input type="text" name="lieu" onChange={onChange} />
                </div>
                <div className="group">
               <button>Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default FormationAdd;

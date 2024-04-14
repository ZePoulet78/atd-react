
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
            Formation Add
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="nom">nom</label>
                    <input type="text" name="nom" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="time">time</label>
                    <input type="time" name="time" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="but">but</label>
                    <input type="text" name="but" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="tel">description</label>
                    <input type="text" name="description" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="type">lieu</label>
                    <input type="text" name="lieu" onChange={onChange} />
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default FormationAdd;

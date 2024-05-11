import React, { useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { formationService } from '@/_service/formation.service';



const FormationEdit = () => {
    const [formation, setFormation] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

      
    const { id } = useParams()


    const onChange = (e) => {
        setFormation({
            ...formation,
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = (e) => {
        e.preventDefault()
        formationService.updateFormation(formation)
            .then(res => {
                navigate('../index')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {     
        if (flag.current === false) {
            formationService.getFormationById(id)
                .then(res => {
                    setFormation(res.data.formations)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="FormationEdit">
            Formation Edit
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="date_debut">date_debut</label>
                    <input type="date" name="date_debut" value={formation.date_debut} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="date_fin">date_fin</label>
                    <input type="date" name="date_fin" value={formation.date_fin} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="time">time</label>
                    <input type="number" name="time" value={formation.time} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="but">but</label>
                    <input type="text" name="but" value={formation.but} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="description">Mot de passe</label>
                    <input type="text" value={formation.description} name="description" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="lieu">lieu</label>
                    <input type="text" value={formation.lieu} name="lieu" onChange={onChange} />
                </div>
                <div className="group">
               <button>Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default FormationEdit;
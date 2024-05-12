
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { entrepotsService } from '@/_service/entrepot.service';

const EntrepotsAdd = () => {
    const [entrepots, setEntrepots] = useState([])
    let navigate = useNavigate()

    console.log(entrepots)
    const onChange = (e) => {
        setEntrepots({
            ...entrepots,
            [e.target.name]: e.target.value
        })
        console.log(entrepots)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        entrepotsService.addEntrepot(entrepots)
            .then(res => navigate('../index'))
            .catch(err => console.log(err))
    }

    return (
        <div className="Ajouter un entrepot">
            Entrepot Add
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="address">address</label>
                    <input type="text" name="address" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="max_capacity">max_capacity</label>
                    <input type="number" name="max_capacity" onChange={onChange} />

                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default EntrepotsAdd;

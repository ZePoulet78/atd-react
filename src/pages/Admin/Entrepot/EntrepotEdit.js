import React, { useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { entrepotsService } from '@/_service/entrepot.service';



const EntrepotsEdit = () => {
    const [entrepots, setEntrepots] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

      
    const { id } = useParams()


    const onChange = (e) => {
        setEntrepots({
            ...entrepots,
            [e.target.name]: e.target.value
        })
        console.log(entrepots)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        entrepotsService.updateEntrepot(entrepots)
            .then(res => {
                navigate('../index')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {     
        if (flag.current === false) {
            entrepotsService.getEntrepotById(id)
                .then(res => {
                    setEntrepots(res.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="Ajouter un entrepot">
            Entrepot Edit
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="name">name</label>
                    <input type="text" value={entrepots.name} name="name" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="address">address</label>
                    <input type="text" value={entrepots.address} name="address" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="max_capacity">max_capacity</label>
                    <input type="number" value={entrepots.max_capacity} name="max_capacity" onChange={onChange} />

                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default EntrepotsEdit;
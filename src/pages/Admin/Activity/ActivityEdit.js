import React, { useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { activityService } from '@/_service/activity.service';



const ActivityEdit = () => {
    const [activity, setActivity] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()
    const { id } = useParams()
    
    const onChange = (e) => {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
        console.log(activity)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        activityService.updateActivity(activity)
            .then(res => {
                navigate('../index')
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {     
        if (flag.current === false) {
            activityService.getActivityById(id)
                .then(res => {
                    setActivity(res.data.activity)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container d-flex justify-content-center mt-4">
            <div className="card" style={{ maxWidth: '500px' }}>
                <div className="card-body">
                    <h2 className="card-title">Ajouter une activité</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input value={activity.description} type="text" className="form-control" name="description" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="heure_debut" className="form-label">Heure de Début</label>
                            <input value={activity.heure_debut} type="time" className="form-control" name="heure_debut" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="heure_fin" className="form-label">Heure de Fin</label>
                            <input value={activity.heure_fin} type="time" className="form-control" name="heure_fin" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input value={activity.date} type="date" className="form-control" name="date" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">Type</label>
                            <input value={activity.type} type="text" className="form-control" name="type" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lieu" className="form-label">Lieu</label>
                            <input value={activity.lieu} type="text" className="form-control" name="lieu" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="max_users" className="form-label">Max. Bénévoles</label>
                            <input value={activity.max_users} type="number" className="form-control" name="max_users" onChange={onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Modifier</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ActivityEdit;

import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { activityService } from '@/_service/activity.service';

const ActivityAdd = () => {
    const [activity, setActivity] = useState([])
    let navigate = useNavigate()


    const onChange = (e) => {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        activityService.addActivity(activity)
            .then(res => navigate('../index'))
            .catch(err => console.log(err))
    }

    return (
        <div className="UserEdit">
            Activity Add
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="heure_debut">heure_debut</label>
                    <input type="time" name="heure_debut" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="heure_fin">heure_fin</label>
                    <input type="time" name="heure_fin" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="date">date</label>
                    <input type="date" name="date" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="type">Type</label>
                    <input type="text" name="type" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="description">description</label>
                    <input type="text" name="description" onChange={onChange} />
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default ActivityAdd;

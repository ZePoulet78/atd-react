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
            .catch(err => console.log(err))
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
        <div className="UserEdit">
            User Edit
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="heure_debut">Heure de debut</label>
                    <input type="time"  name="heure_debut" value={activity.heure_debut} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="heure_fin">Heure de fin</label>
                    <input type="time"   name="heure_fin" value={activity.heure_fin} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" value={activity.date} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="type">Type</label>
                    <input type="text" name="type" value={activity.type} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="description">Description</label>
                    <input type="text" value={activity.description} name="description" onChange={onChange} />
                </div>
                <div className="group">
               <button>Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default ActivityEdit;
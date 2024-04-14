import Axios from './caller.service';

let getAllActivity = () => {
    return Axios.get('/act');
}

let addActivity = (act) => {
    return Axios.post('/act/', act)
}


let updateActivity = (act) => {
    return Axios.patch('/admin/act/'+ act.id, act)
}

export const activityService = {
    getAllActivity,
    updateActivity,
    addActivity
}
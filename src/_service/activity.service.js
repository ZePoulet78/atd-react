import Axios from './caller.service';

let getAllActivity = () => {
    return Axios.get('/act');
}

let getActivityById = (id) => {
    return Axios.get('/act/'+id);
}

let addActivity = (act) => {
    return Axios.post('/act/', act)
}


let updateActivity = (act) => {
    return Axios.patch('/act/'+ act.id, act,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}


let deleteUser = (id) => {
    return Axios.delete('/act/'+id)
}


export const activityService = {
    getAllActivity,
    updateActivity,
    addActivity,
    getActivityById,
    deleteUser
}
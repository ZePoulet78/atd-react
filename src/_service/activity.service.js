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
    if (act.heure_debut && act.heure_debut.includes(':')) {
        const heureDebutParts = act.heure_debut.split(':');
        act.heure_debut = `${heureDebutParts[0]}:${heureDebutParts[1]}`;
    }

    if (act.heure_fin && act.heure_fin.includes(':')) {
        const heureFinParts = act.heure_fin.split(':');
        act.heure_fin = `${heureFinParts[0]}:${heureFinParts[1]}`;
    }

    return Axios.patch('/act/'+act.id, act, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}



let deleteUser = (id) => {
    return Axios.delete('/act/'+id)
}


let makeActivity = (act) => {
    return Axios.post('/makeactivity', act);
}

let getUsersActivities = (id) => {
    return Axios.get('/makeactivity/user/'+id);
}

let undoActivity = (id) => {
    return Axios.delete('/undoactivity/'+id);
}


export const activityService = {
    getAllActivity,
    updateActivity,
    addActivity,
    getActivityById,
    deleteUser,
    makeActivity,
    getUsersActivities,
    undoActivity
}
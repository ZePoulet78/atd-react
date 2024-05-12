import Axios from './caller.service';

let getAllFormation = () => {
    return Axios.get('/formations');
}

let getFormationById = (id) => {
    return Axios.get('/formations/'+id);
}

let addFormation = (formation) => {
    return Axios.post('/formations/', formation)
}


let updateFormation = (formation) => {
    return Axios.patch('/formations/'+ formation.id, formation,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

let deleteFormation = (id) => {
    return Axios.delete('/formations/'+id)
}






export const formationService = {
    getAllFormation,
    updateFormation,
    addFormation,
    getFormationById,
    deleteFormation
}
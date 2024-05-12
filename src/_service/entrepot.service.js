import Axios from './caller.service';

let getAllEntrepot = () => {
    return Axios.get('/entrepots');
}

let getEntrepotById = (id) => {
    return Axios.get('/entrepots/'+id);

}

let updateEntrepot = (entrepots) => {
    return Axios.patch('/entrepots/'+ entrepots.id, entrepots,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

let deleteEntrepot = (id) => {
    return Axios.delete('/entrepots/'+id)
}

let addEntrepot = (entrepots) => {
    return Axios.post('/entrepots', entrepots)
}


export const entrepotsService = {
    getAllEntrepot,
    getEntrepotById,
    updateEntrepot,
    deleteEntrepot,
    addEntrepot,

}
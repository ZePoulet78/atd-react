import Axios from './caller.service';

let getAllCollects = () => {
    return Axios.get('/collects');
}

let getCollectById = (id) => {
    return Axios.get('/collects/'+id);
}

let updateCollect = (collect) => {
    return Axios.patch('/collects/'+ collect.id, collect,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

let deleteCollect = (id) => {
    return Axios.delete('/collects/'+id)
}

let addCollect = (collect) => {
    console.log(collect);

    return Axios.post('/collects', collect)
}

let getCollectsByUser = (id) => {
    return Axios.get('/user/'+id+'/collects');
}

let addRoutePlan = (routePlan, id) => {
    return Axios.put('/collect/'+id+'/route', {
        plan_de_route:routePlan
    })
}

export const collectService = {
    getAllCollects,
    getCollectById,
    updateCollect,
    deleteCollect,
    addCollect,
    getCollectsByUser,
    addRoutePlan
}
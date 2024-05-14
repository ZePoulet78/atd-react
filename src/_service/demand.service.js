import Axios from './caller.service';

let getAllDemand = () => {
    return Axios.get('/demand');
}

let deleteDemand = (id) => {
    return Axios.delete('/demand/'+id)
}

let approveUser = (user) => {
    return Axios.post('/admin/demand/a/' +user.id, user)
}

let listDocument = (id) => {
    return Axios.get('/document/'+id );
}

let deleteDocument = (id) => {
    return Axios.delete('/admin/document/'+id);
}

export const demandService = {
    getAllDemand,
    deleteDemand,
    approveUser,
    listDocument,
    deleteDocument
}
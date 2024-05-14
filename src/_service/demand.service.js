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

// get users document
let getUsersDocuments = (id) => {
    return Axios.get('/admin/documents/'+id);
}


export const demandService = {
    getAllDemand,
    deleteDemand,
    approveUser,
    getUsersDocuments
}
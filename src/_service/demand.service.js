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
    return Axios.get('/admin/document/'+id );
}

let deleteAuthUserDocument = (id) => {
    return Axios.delete('/admin/document/'+id);
}

let destroyDocument = (id) => {
    return Axios.delete('/admin/document/user/'+id)
}


export const demandService = {
    getAllDemand,
    deleteDemand,
    approveUser,
    listDocument,
    deleteAuthUserDocument,
    destroyDocument
}
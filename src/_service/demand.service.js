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

<<<<<<< HEAD
// get users document
let getUsersDocuments = (id) => {
    return Axios.get('/admin/documents/'+id);
}

=======
let listDocument = (id) => {
    return Axios.get('/document/'+id );
}

let deleteDocument = (id) => {
    return Axios.delete('/admin/document/'+id);
}
>>>>>>> fefebb872d7aa73f0ebf7e1afe9e1a43b6c61cfc

export const demandService = {
    getAllDemand,
    deleteDemand,
    approveUser,
<<<<<<< HEAD
    getUsersDocuments
=======
    listDocument,
    deleteDocument
>>>>>>> fefebb872d7aa73f0ebf7e1afe9e1a43b6c61cfc
}
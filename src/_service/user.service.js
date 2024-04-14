import Axios from './caller.service';

let getAllUsers = () => {
    return Axios.get('/admin/users');
}

let getUserById = (id) => {
    return Axios.get('/admin/user/'+id);

}

let updateUser = (user) => {
    return Axios.patch('/admin/user/'+ user.id, user)
}

let deleteUser = (id) => {
    return Axios.delete('/admin/user/'+id)
}

let addUser = (user) => {
    return Axios.post('/admin/user', user)
}

export const userService = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    addUser
}
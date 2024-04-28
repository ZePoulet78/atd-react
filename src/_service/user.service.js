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

let saveUser = (user) => {
    localStorage.setItem('name', user.lastname);
    localStorage.setItem('firstname', user.firstname);
    localStorage.setItem('email', user.email);
    localStorage.setItem('role', user.role);
    localStorage.setItem('id', user.id);
    localStorage.setItem('avatar', user.avatar);
}

export const userService = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    addUser,
    saveUser
}
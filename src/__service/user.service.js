import Axios from './caller.service';

let getAllUsers = () => {
    return Axios.get('/admin/users');
}

let getUserById = (id) => {
    return Axios.get('/users/'+{id});

}

// let addUser = (user) => {
//     return Axios.post('/user', user)
// }

export const userService = {
    getAllUsers,
    getUserById
}
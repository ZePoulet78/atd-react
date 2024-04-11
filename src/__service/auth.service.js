import Axios from './caller.service';

let login = (user) => {
    return Axios.post('/login', user);
}

export const authService = {
    login
}
import Axios from './caller.service';

const TOKEN_EXPIRATION_TIME = 60 * 60 * 24 * 1000;

let login = (email, password) => {
    return Axios.post('/auth', { email, password });
}

let saveToken = (token) => {
    const expirationTime = new Date().getTime() + TOKEN_EXPIRATION_TIME;
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiration', expirationTime.toString());
}

let logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('name');
    localStorage.removeItem('firstname');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    localStorage.removeItem('avatar');
    window.location.href = '/auth';
}

let isTokenExpired = () => {
    const expirationTime = localStorage.getItem('tokenExpiration');
    if (!expirationTime) {
        return true;
    }
    return new Date().getTime() >= parseInt(expirationTime, 10);
}

let isLoggedIn = async () => {
    if (isTokenExpired()) {
        logout();
        return false;
    }
    return true;
}

let getToken = () => {
    return localStorage.getItem('token');
}

const register = (formData) => {
    return Axios.post('/register', formData)
      .then(response => response.data)
      .catch(error => {
        throw new Error(`Erreur lors de l'inscription : ${error.response.data.message}`);
      });
};



export const accountService = {
    login,
    saveToken,
    logout,
    isLoggedIn,
    getToken,
    isTokenExpired,
    register
}

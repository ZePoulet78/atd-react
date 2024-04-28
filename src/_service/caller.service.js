import axios from 'axios';
import { accountService } from './account.service';

const Axios = axios.create({
    baseURL: 'http://localhost:8000/api',
});

Axios.interceptors.request.use(config => {

    if(accountService.isLoggedIn()){
        config.headers.Authorization = `Bearer ${accountService.getToken()}`;
        config.headers.Accept = `Accept application/json`;
    }
    return config;
});


export default Axios;
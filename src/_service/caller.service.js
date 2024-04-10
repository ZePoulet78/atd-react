import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:8000/api',
})

Axios.interceptors.request.use(request => {
    
    return request
})

export default Axios;
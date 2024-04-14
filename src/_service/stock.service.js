import Axios from './caller.service';

let getAllStock = () => {
    return Axios.get('/stock');
}


export const stockService = {
    getAllStock
}
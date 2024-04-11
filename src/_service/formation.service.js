import Axios from './caller.service';

let getAllFormation = () => {
    return Axios.get('/formations');
}

export const formationService = {
    getAllFormation
}
import Axios from './caller.service';

let indexMaraude = () => {
    return Axios.get('/maraudes');
}

let getMaraudeById = (id) => {
    return Axios.get('/maraudes/'+id);
}

let addMaraude = (maraude) => {
    return Axios.post('/maraudes', maraude)
}

let updateMaraude = (maraude) => {
    return Axios.patch('/maraudes/'+maraude.id, maraude, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}

let deleteMaraude = (id) => {
    return Axios.delete('/maraudes/'+id)
}

let addRoutePlan = (routePlan, id) => {
    return Axios.put('/maraude/'+id+'/route', {
        itinerary:routePlan
    })
}



let makeMaraude = (maraude) => {
    return Axios.post('/makemaraude', maraude)
}

let indexMakeMaraude = () => {
    return Axios.get('/makemaraude');
}

let getMakeMaraudeById = (id) => {
    return Axios.get('/makemaraude/'+id);
}

let deleteMakeMaraude = (id) => {
    return Axios.delete('/makemaraude/'+id)
}

let checkIfUserIsInMaraude = (id, maraude_id) => {
    return Axios.get('/makemaraude/'+id+'/'+maraude_id)
}

let getUsersMaraudes = (id) => {
    return Axios.get('/maraudes/user/'+id)
}

let undoMaraude = (id, maraude_id) => {
    return Axios.delete('/makemaraude/'+id+'/'+maraude_id)
}

export const maraudeService = {
    indexMaraude,
    updateMaraude,
    addMaraude,
    getMaraudeById,
    deleteMaraude,
    addRoutePlan,
    makeMaraude,
    indexMakeMaraude,
    getMakeMaraudeById,
    deleteMakeMaraude,
    checkIfUserIsInMaraude,
    getUsersMaraudes,
    undoMaraude
}


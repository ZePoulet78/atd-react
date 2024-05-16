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



export const maraudeService = {
    indexMaraude,
    updateMaraude,
    addMaraude,
    getMaraudeById,
    deleteMaraude,
    addRoutePlan
}


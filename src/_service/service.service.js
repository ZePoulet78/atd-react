import Axios from "./caller.service";

let indexServices = () => {
    return Axios.get('/services')
}

let addService = (service) => {
    return Axios.post('/services', service)
}

let showService = (id) => {
    return Axios.get('/services/'+id)
}

let updateService = (service) => {
    return Axios.put('/services/'+ service.id, service,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

let deleteService = (id) => {
    return Axios.delete('/services/'+id)
}


//benevolat

const addVolunteering = (formData) => {
    return Axios.post('/volunteering', formData);
};

let getVolunteeringsByUser = () => {
    return Axios.get('/volunteering/user')
}


const updateServiceBenevolat = (id, service) => {
    if (service.heure && service.heure.includes(':')) {
        const heureParts = service.heure.split(':');
        service.heure = `${heureParts[0]}:${heureParts[1]}`;
    }

    return Axios.patch(`/volunteering/${id}`, service, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
};


const deleteServiceBenevolat = (id) => {
    return Axios.delete(`/volunteering/${id}`);
};

const showServiceBenevolat = (id) => {
    return Axios.get(`/volunteering/${id}`);
};


const joinVolunteering = (id) => {
    return Axios.put('/volunteering/join/' + id);
};

let index = () => {
    return Axios.get('/volunteering')
}

const leaveVolunteering = (id) => {
    return Axios.put('/volunteering/leave/' + id);
};

const getVolunteerServices = () => {
    return Axios.get('/volunteering/volunteer');
};




export const serviceBenevolatService = {
    indexServices,
    updateService,
    addService,
    showService,
    deleteService,
    addVolunteering,
    getVolunteeringsByUser,
    updateServiceBenevolat,
    deleteServiceBenevolat,
    showServiceBenevolat,
    joinVolunteering,
    index,
    leaveVolunteering,
    getVolunteerServices
}

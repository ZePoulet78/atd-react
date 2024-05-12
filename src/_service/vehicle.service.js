import Axios from './caller.service';

let getAllVehicles = () => {
    return Axios.get('/vehicles');
}

let getVehicleById = (id) => {
    return Axios.get('/vehicle/'+id);
}

let updateVehicle = (vehicle) => {
    return Axios.patch('/vehicle/'+ vehicle.id, vehicle,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

let deleteVehicle = (id) => {
    return Axios.delete('/vehicle/'+id)
}

let addVehicle = (vehicle) => {
    return Axios.post('/vehicle', vehicle)
}

export const vehicleService = {
    getAllVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicle,
    addVehicle
}
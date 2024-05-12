import Axios from './caller.service';

let getAllVehicles = () => {
    return Axios.get('/vehicules');
}

let getVehicleById = (id) => {
    return Axios.get('/vehicules/'+id);
}

let updateVehicle = (vehicle) => {
    return Axios.patch('/vehicules/'+ vehicle.id, vehicle,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

let deleteVehicle = (id) => {
    return Axios.delete('/vehicules/'+id)
}

let addVehicle = (vehicle) => {
    console.log(vehicle);

    return Axios.post('/vehicules', vehicle)
}

export const vehicleService = {
    getAllVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicle,
    addVehicle
}
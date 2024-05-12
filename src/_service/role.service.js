import Axios from "./caller.service";

let indexRoles = () => {
    return Axios.get('/admin/roles')
}

let addRole = (role) => {
    return Axios.post('/admin/roles', role)
}

let showRole = (id) => {
    return Axios.get('/admin/roles/'+id)
}

let updateRole = (role) => {
    return Axios.patch('/admin/roles/'+ role.id, role,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

let deleteRole = (id) => {
    return Axios.delete('/admin/roles/'+id)
}

export const roleService = {
    indexRoles,
    updateRole,
    addRole,
    showRole,
    deleteRole
}
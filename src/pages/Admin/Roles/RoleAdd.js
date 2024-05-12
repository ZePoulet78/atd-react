
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { roleService } from '@/_service/role.service';
import AssignRole from '../../Public1/ProfilePage/AssignRole';

const RoleAdd = () => {
    const [user, setRole] = useState([])
    let navigate = useNavigate()


    const onChange = (e) => {
        setRole({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        roleService.addRole(user)
            .then(res => navigate('../index'))
            .catch(err => console.log(err))
    }

    return (
        <div className="RoleAdd">
            Ajouter un rôle
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" onChange={onChange} />
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default RoleAdd;

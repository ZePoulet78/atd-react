import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { roleService } from '@/_service/role.service';

const RoleAdd = () => {
    const [role, setRole] = useState({
        name: ''
    });
    let navigate = useNavigate();

    const onChange = (e) => {
        setRole({
            ...role,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        roleService.addRole(role)
            .then(res => navigate('../index'))
            .catch(err => console.log(err));
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Ajouter un rôle</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input type="text" className="form-control" name="name" onChange={onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RoleAdd;

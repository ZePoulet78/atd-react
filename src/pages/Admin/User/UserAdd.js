import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '@/_service/user.service';
    
const UserAdd = () => {
    const [user, setUser] = useState({
        role: '',
        lastname: '',
        firstname: '',
        tel: '',
        email: '',
        password: ''
    });
    let navigate = useNavigate();

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        userService.addUser(user)
            .then(res => navigate('../index'))
            .catch(err => console.log(err));
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">User Add</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="role" className="form-label">Role</label>
                            <select className="form-select" name="role" onChange={onChange}>
                                <option value="0">Admin</option>
                                <option value="1">Bénévole</option>
                                <option value="2">Bénéficiaire</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">Nom</label>
                            <input type="text" className="form-control" name="lastname" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">Prénom</label>
                            <input type="text" className="form-control" name="firstname" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tel" className="form-label">Tel</label>
                            <input type="tel" className="form-control" name="tel" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" name="password" onChange={onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserAdd;

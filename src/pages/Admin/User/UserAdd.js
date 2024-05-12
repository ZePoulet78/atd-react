
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '@/_service/user.service';
import AssignRole from '../../Public1/ProfilePage/AssignRole';

const UserAdd = () => {
    const [user, setUser] = useState([])
    let navigate = useNavigate()


    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        userService.addUser(user)
            .then(res => navigate('../index'))
            .catch(err => console.log(err))
    }

    return (
        <div className="UserEdit">
            User Add
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="role">role</label>
                    <select name="role" onChange={onChange}>
                        <option value="0">Admin</option>
                        <option value="1">Bénévole</option>
                        <option value="2">Bénéficiaire</option>
                    </select>    
                </div>
                <div className="group">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="tel">tel</label>
                    <input type="tel" name="tel" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" onChange={onChange} />
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default UserAdd;

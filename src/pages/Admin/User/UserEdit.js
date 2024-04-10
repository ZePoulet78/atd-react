import React, { useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { userService } from '@/_service/user.service';



const UserEdit = () => {
    const [user, setUser] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

      
    const { id } = useParams()


    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = (e) => {
        e.preventDefault()
        userService.updateUser(user)
            .then(res => {
                navigate('../index')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {     
        if (flag.current === false) {
            userService.getUserById(id)
                .then(res => {
                    setUser(res.data.user)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="UserEdit">
            User Edit
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" value={user.lastname} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" value={user.firstname} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="tel">Pseudo</label>
                    <input type="tel" name="tel" value={user.tel} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="eamil" name="email" value={user.email} onChange={onChange} />
                </div>
                <div className="group">
                    <button>Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default UserEdit;
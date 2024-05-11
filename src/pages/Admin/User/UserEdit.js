import React, { useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { userService } from '@/_service/user.service';
import AssignRole from '../../Public1/ProfilePage/AssignRole';



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
      <div>
      <div className='flex flex-row'>
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
          <div className="max-w-4xl w-full p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <h2 className="text-center text-3xl font-bold mb-6 text-gray-800 dark:text-white">User Edit</h2>
            <form onSubmit={onSubmit}>
              <div className="mb-6">
                <label htmlFor="lastname" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Nom</label>
                <input
                  type="text"
                  name="lastname"
                  value={user.lastname}
                  onChange={onChange}
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="firstname" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Prénom</label>
                <input
                  type="text"
                  name="firstname"
                  value={user.firstname}
                  onChange={onChange}
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="tel" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Pseudo</label>
                <input
                  type="tel"
                  name="tel"
                  value={user.tel}
                  onChange={onChange}
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={onChange}
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={onChange}
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline text-lg"
                  type="submit"
                >
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </div>
        <>
            <AssignRole userId={user.id}/>
        </>
      </div>
      </div>
    );
};

export default UserEdit;
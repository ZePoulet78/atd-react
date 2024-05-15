import React, { useState, useEffect } from 'react';
import { userService } from '@/_service/user.service';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const User = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    userService.getAllUsers()
      .then(res => {
        setUsers(res.data.users);
        console.log(res.data.users);
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  }, []);

  const delUser = (userId) => {
    userService.deleteUser(userId)
      .then(res => {
        setUsers((current) => current.filter(user => user.id !== userId));
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  }

  const filteredUsers = users.filter(user =>
    user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.tel.includes(searchTerm) || user.id.toString().includes(searchTerm)
  );

  const notify = () => toast("Wow so easy!");

  return (
  
    <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
      <div className="bg-white p-6 flex flex-col md:flex-row md:items-center">
        <div className="mb-4 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Gestion des Utilisateurs</h2>
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full mb-4 md:mb-0"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">#</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Nom</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Prénom</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Téléphone</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-gray-200">
                    <td className="py-2 md:py-4 px-4 md:px-6">{user.id}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{user.lastname}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{user.firstname}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{user.email}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{user.tel}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6 space-x-2">
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-3 md:px-4 rounded">
                        <img src="/eyes.svg" alt="Voir" className="h-4 md:h-5 w-4 md:w-5 inline-block" />
                      </button>
                      <Link to={`/admin/user/edit/${user.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 md:px-4 rounded">
                          Modifier
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                        onClick={() => delUser(user.id)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:border-l md:border-gray-400 md:pl-6 md:mt-0 mt-4">
          <Link to="/admin/user/add/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Ajouter un utilisateur
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
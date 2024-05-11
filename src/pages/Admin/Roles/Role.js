import React, { useState, useEffect } from 'react';
import { roleService } from '@/_service/role.service';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Role = () => {
  const [roles, setRoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    roleService.indexRoles()
      .then(res => {
        setRoles(res.data.roles);
        console.log(res.data.roles);
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  }, []);

  const deleteRole = (roleId) => {
    roleService.deleteRole(roleId)
      .then(res => {
        setRoles((current) => current.filter(role => role.id !== roleId));
        notify('Rôle supprimé avec succès');
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
        notify('Une erreur s\'est produite lors de la suppression du rôle');
      });
  }

  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const notify = (message) => toast(message);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
      <div className="bg-white p-6 flex flex-col md:flex-row md:items-center">
        <div className="mb-4 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Gestion des Rôles</h2>
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full mb-4 md:mb-0"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {roles.length === 0 ? (
            <p>Aucun rôle trouvé</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">#</th>
                    <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Nom</th>
                    <th className="w-1/2 py-4 px-6 text-left text-gray-600 font-bold uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {filteredRoles.map((role) => (
                    <tr key={role.id} className="border-b border-gray-200">
                      <td className="py-2 md:py-4 px-4 md:px-6">{role.id}</td>
                      <td className="py-2 md:py-4 px-4 md:px-6">{role.name}</td>
                      <td className="py-2 md:py-4 px-4 md:px-6 space-x-2">
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-3 md:px-4 rounded">
                          <img src="/eyes.svg" alt="Voir" className="h-4 md:h-5 w-4 md:w-5 inline-block" />
                        </button>
                        <Link to={`/admin/role/edit/${role.id}`}>
                          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 md:px-4 rounded">
                            Modifier
                          </button>
                        </Link>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                          onClick={() => deleteRole(role.id)}
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="md:border-l md:border-gray-400 md:pl-6 md:mt-0 mt-4">
          <Link to="/admin/roles/add/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
              Ajouter un Rôle
            </button>
          </Link>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Role;
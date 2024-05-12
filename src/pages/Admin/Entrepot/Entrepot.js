import React, { useState, useEffect } from 'react';
import { entrepotsService } from '@/_service/entrepot.service';
import { StockService } from '@/_service/stock.service';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Entrepots = () => {
  const [entrepots, setEntrepots] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    entrepotsService.getAllEntrepot()
      .then(res => {
        setEntrepots(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  }, []);

  const delUser = (entrepotId) => {
    entrepotsService.deleteEntrepot(entrepotId)
      .then(res => {
        setEntrepots((current) => current.filter(entrepots => entrepots.id !== entrepotId));
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  }

  const filteredEntrepots = entrepots.filter(entrepots =>
    entrepots.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entrepots.address.toLowerCase().includes(searchTerm.toLowerCase()) 

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
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">#</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Nom</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">address</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">actual_capacity</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">max_capacity</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredEntrepots.map((entrepots) => (
                  <tr key={entrepots.id} className="border-b border-gray-200">
                    <td className="py-2 md:py-4 px-4 md:px-6">{entrepots.id}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{entrepots.name}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{entrepots.address}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{entrepots.actual_capacity}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{entrepots.max_capacity}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6 space-x-2">
                     
                      <Link to={`/admin/entrepot/prod/add/${entrepots.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                          Ajouter un Produit
                        </button>
                      </Link>
                      <Link to={`/admin/entrepot/prod/show/${entrepots.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                          voir les produits
                        </button>
                      </Link>
                      <Link to={`/admin/entrepot/edit/${entrepots.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 md:px-4 rounded">
                          Modifier
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                        onClick={() => delUser(entrepots.id)}
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
          <Link to="/admin/entrepot/add/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Ajouter un entrepot
            </button>
          </Link>
          <div>
    <button onClick={notify}>Notify!</button>
    <ToastContainer />
    </div>
        </div>
      </div>
    </div>
  );
};

export default Entrepots;

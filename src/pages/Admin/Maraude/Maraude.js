import React, { useState, useEffect } from 'react';
import { maraudeService } from '@/_service/maraude.service';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Maraude = () => {
  const [maraudes, setMaraudes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    maraudeService.indexMaraude()
      .then(res => {
        setMaraudes(res.data.maraudes);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  }, []);

  const deleteMaraude = (maraudeId) => {
    maraudeService.delete(maraudeId)
      .then(res => {
        setMaraudes((current) => current.filter(maraude => maraude.id !== maraudeId));
        notify('Maraude supprimée avec succès');
      })
      .catch(err => {
        console.error(err);
        setError(err.message || "Une erreur s'est produite");
        notify("Une erreur s'est produite lors de la suppression de la maraude");
      });
  }


  const notify = (message) => toast(message);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
      <div className="bg-white p-6 flex flex-col md:flex-row md:items-center">
        <div className="mb-4 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Gestion des Maraudes</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full mb-4 md:mb-0"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {maraudes.length === 0 ? (
            <p>Aucune maraude trouvée</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">#</th>
                    <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Date</th>
                    <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Heure de Début</th>
                    <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Heure de Fin</th>
                    <th className="w-1/2 py-4 px-6 text-left text-gray-600 font-bold uppercase">Véhicule</th>
                    <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Conducteur</th>
                    <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Plan de route</th>
                    <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {maraudes.map((maraude) => (
                    <tr key={maraude.id} className="border-b border-gray-200">
                      <td className="py-2 md:py-4 px-4 md:px-6">{maraude.id}</td>
                      <td className="py-2 md:py-4 px-4 md:px-6">{maraude.maraud_date}</td>
                      <td className="py-2 md:py-4 px-4 md:px-6">{maraude.departure_time}</td>
                      <td className="py-2 md:py-4 px-4 md:px-6">{maraude.return_time}</td>
                      <td className="py-2 md:py-4 px-4 md:px-6">{maraude.vehicle.model} {maraude.vehicle.year}</td>
                      
                      <td className="py-2 md:py-4 px-4 md:px-6">{maraude.user.firstname} {maraude.user.lastname}</td>
                      <td className="py-2 md:py-4 px-4 md:px-6">
                        {maraude.itinerary? (
                          <a href={maraude.itinerary} target="_blank" rel="noreferrer">
                            Plan de route
                          </a>
                        ) : (
                          "Aucun plan de route"
                        )}
                      </td>
                      <td className="py-2 md:py-4 px-4 md:px-6 space-x-2">
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-3 md:px-4 rounded">
                          <img src="/eyes.svg" alt="Voir" className="h-4 md:h-5 w-4 md:w-5 inline-block" />
                        </button>
                        <Link to={`/admin/maraude/edit/${maraude.id}`}>
                          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 md:px-4 rounded">
                            Modifier
                          </button>
                        </Link>
                        <Link to={`/admin/maraude/road/${maraude.id}`}>
                          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 md:px-4 rounded">
                            Ajouter le plan de route
                          </button>
                        </Link>
                        <Link to={`/admin/maraude/${maraude.id}/produits`}>
                          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 md:px-4 rounded">
                            Voir les produits
                          </button>
                        </Link>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                          onClick={() => deleteMaraude(maraude.id)}
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
          <Link to="/admin/maraude/add/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
              Ajouter une Maraude
            </button>
          </Link>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Maraude;

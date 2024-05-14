import React, { useState, useEffect } from 'react';
import { demandService } from '@/_service/demand.service';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Demand = () => {
  const [demandes, setDemandes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    chargerDemandes();
  }, []);

  const chargerDemandes = () => {
    demandService.getAllDemand()
      .then(res => {
        setDemandes(res.data.user);
        console.log(res.data)
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  };

  const supprimerDemande = (idDemande) => {
    demandService.deleteDemand(idDemande)
      .then(() => {
        setDemandes(demandes.filter(demande => demande.id !== idDemande));
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  };

  const approuverDemande = (demande) => {
    demandService.approveUser(demande)
      .then(() => {
        chargerDemandes();
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  };

  const filteredDemandes = demandes.filter(demande =>
    demande.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    demande.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    demande.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    demande.id.toString().includes(searchTerm)
  );

  const notify = () => toast("Wow so easy!");

  return (
    <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
      <div className="bg-white p-6 flex flex-col md:flex-row md:items-center">
        <div className="mb-4 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Gestion des Demandes</h2>
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
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredDemandes.map((demande) => (
                  <tr key={demande.id} className="border-b border-gray-200">
                    <td className="py-2 md:py-4 px-4 md:px-6">{demande.id}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{demande.lastname}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{demande.firstname}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{demande.email}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6 space-x-2">
                      <Link to={`/admin/demand/documents/${demande.id}`} >
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                      >
                        Voir les documents
                      </button>
                      </Link>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                        onClick={() => approuverDemande(demande)}
                      >
                        Approuver
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                        onClick={() => supprimerDemande(demande.id)}
                      >
                        Refuser
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:border-l md:border-gray-400 md:pl-6 md:mt-0 mt-4">
          <Link to="/admin/demand/add/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Ajouter une demande
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

export default Demand;
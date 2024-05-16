import React, { useState, useEffect } from 'react';
import { entrepotsService } from '@/_service/entrepot.service';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MaraudeEnt = () => {
  const [entrepots, setEntrepots] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const { maraudeId } = useParams();

  useEffect(() => {
    console.log("caca");
    console.log(maraudeId);
    console.log("pipi");
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

  // const delUser = (entrepotId) => {
  //   entrepotsService.deleteEntrepot(entrepotId)
  //     .then(res => {
  //       setEntrepots((current) => current.filter(entrepots => entrepots.id !== entrepotId));
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       setError(err.message || 'Une erreur s\'est produite');
  //     });
  // }

  const filteredEntrepots = entrepots.filter(entrepots =>
    entrepots.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entrepots.address.toLowerCase().includes(searchTerm.toLowerCase()) 

  );

  return (
  
    <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
      <div className="bg-white p-6 flex flex-col md:flex-row md:items-center">
        <div className="mb-4 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Choisir un Entrepôt</h2>
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
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Adresse</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Capacité Actuelle</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Capacité Maximum</th>
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
                      <Link to={'/admin/maraude/'+maraudeId+'/entrepots/'+ entrepots.id + '/produits'}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                          Voir les produits
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaraudeEnt;
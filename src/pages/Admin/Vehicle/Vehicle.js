import React, { useState, useEffect } from 'react';
import { vehicleService } from '@/_service/vehicle.service';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    vehicleService.getAllVehicles()
      .then(res => {
        setVehicles(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  }, []);

  const delVehicle = (vehicleId) => {
    vehicleService.deleteVehicle(vehicleId)
      .then(res => {
        setVehicles((current) => current.filter(vehicle => vehicle.id !== vehicleId));
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  }

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.registration_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.year.toString().includes(searchTerm)
  );

  const notify = () => toast("Wow so easy!");

  return (
    <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
      <div className="bg-white p-6 flex flex-col md:flex-row md:items-center">
        <div className="mb-4 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Gestion des Véhicules</h2>
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
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Immatriculation</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Modèle</th>
                  <th className="w-1/6 py-4 px -6 text-left text-gray-600 font-bold uppercase">Année</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b border-gray-200">
                    <td className="py-2 md:py-4 px-4 md:px-6">{vehicle.id}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{vehicle.registration_number}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{vehicle.model}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6">{vehicle.year}</td>
                    <td className="py-2 md:py-4 px-4 md:px-6 space-x-2">
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-3 md:px-4 rounded">
                        <img src="/eyes.svg" alt="Voir" className="h-4 md:h-5 w-4 md:w-5 inline-block" />
                      </button>
                      <Link to={`/admin/vehicle/edit/${vehicle.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 md:px-4 rounded">
                          Modifier
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                        onClick={() => delVehicle(vehicle.id)}
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
          <Link to="/admin/vehicle/add/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Ajouter un véhicule
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

export default Vehicle;
import React, { useState, useEffect } from 'react';
import { demandService } from '@/_service/demand.service';
import { useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pending = () => {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = () => {
    demandService.listDocument(localStorage.getItem('id'))
      .then(res => {
        setDocuments(res.data['documents '] || []);
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  };

  const deleteDocument = (idDocument) => {
    console.log(idDocument)
    demandService.destroyDocument(idDocument)
      .then(() => {
        setDocuments(prevDocuments => prevDocuments.filter(document => document.id !== idDocument));

        toast.success('Document supprimé avec succès');
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  };

  const filteredDocuments = documents.filter(document =>
    document.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
      <div className="bg-white p-6 flex flex-col md:flex-row md:items-center">
        <div className="mb-4 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Gestion des Documents</h2>
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full mb-4 md:mb-0"
            placeholder="Rechercher un document..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {error && <div className="alert alert-danger">Erreur : {error}</div>}
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">#</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Titre</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Lien</th>
                  <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredDocuments.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-4 px-6 text-center">Aucun document disponible.</td>
                  </tr>
                ) : (
                  filteredDocuments.map(document => (
                    <tr key={document.id} className="border-b border-gray-200">
                      <td className="py-2 md:py-4 px-4 md:px-6">{document.id}</td>
                      <td className="py-2 md:py-4 px-4 md:px-6">{document.title}</td>
                      <td className="py-2 md:py-4 px-4 md:px-6">
                        <a href={document.document} target="_blank" rel="noopener noreferrer">
                          Voir le document
                        </a>
                      </td>
                      <td className="py-2 md:py-4 px-4 md:px-6 space-x-2">
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 md:px-4 rounded"
                          onClick={() => deleteDocument(document.id)}
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:border-l md:border-gray-400 md:pl-6 md:mt-0 mt-4">
          <Link to="/profile/pending/upload">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Ajouter un document
            </button>
          </Link>
          <div>
            <button onClick={() => toast("Notification!")}>Notify!</button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pending;

import React, { useState } from 'react';
import { demandService } from '@/_service/demand.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !file) {
      setError('Le titre et le fichier sont obligatoires.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    demandService.uploadDocument(formData)
      .then(() => {
        toast.success('Document téléchargé avec succès');
        setTitle('');
        setFile(null);
        setError(null);
        window.location.href='/profile/pending'
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Déposer un justificatif</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Titre :</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">Fichier :</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Télécharger
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Upload;

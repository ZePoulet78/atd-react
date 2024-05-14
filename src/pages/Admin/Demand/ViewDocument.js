import React, { useState, useEffect } from 'react';
import { demandService } from '@/_service/demand.service';
import { useParams } from 'react-router-dom';

const ViewDocument = () => {
    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        chargerDocuments();
    }, []);
    
    const chargerDocuments = () => {
        demandService.listDocument(id)
        .then(res => {
            setDocuments(res.data.document);
        })
        .catch(err => {
            console.error(err);
            setError(err.message || 'Une erreur s\'est produite');
        });
    };
    
    const supprimerDocument = (idDocument) => {
        demandService.deleteDocument(idDocument)
        .then(() => {
            setDocuments(documents.filter(document => document.id !== idDocument));
        })
        .catch(err => {
            console.error(err);
            setError(err.message || 'Une erreur s\'est produite');
        });
    };
    
    return (
        <div className="container">
        <h2 className="mt-4 mb-3">Liste des documents</h2>
        {error && <div className="alert alert-danger">Erreur : {error}</div>}
        <div className="row">
            {documents.map(document => (
            <div className="col-md-4 mb-4" key={document.id}>
                <div className="card">
                <div className="card-body">
                    <a href={document.file}>{document.title}</a>
                    <button className="btn btn-danger" onClick={() => supprimerDocument(document.id)}>Supprimer</button>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default ViewDocument;
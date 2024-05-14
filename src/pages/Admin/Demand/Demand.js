import React, { useState, useEffect } from 'react';
import { demandService } from '@/_service/demand.service';

const Demand = () => {
  const [demandes, setDemandes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    chargerDemandes();
  }, []);

  const chargerDemandes = () => {
    demandService.getAllDemand()
      .then(res => {
        setDemandes(res.data.user);
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

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Liste des demandes d'utilisateurs</h2>
      {error && <div className="alert alert-danger">Erreur : {error}</div>}
      <div className="row">
        {demandes.map(demande => (
          <div className="col-md-4 mb-4" key={demande.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{demande.nom}</h5>
                <p className="card-text">Email : {demande.email}</p>
                {/* Ajoutez d'autres informations ici si nécessaire */}
                <button className="btn btn-success mr-2" onClick={() => approuverDemande(demande)}>Approuver</button>
                <button className="btn btn-danger" onClick={() => supprimerDemande(demande.id)}>Refuser</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demand;

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
    <div>
      <h2>Liste des demandes d'utilisateurs</h2>
      {error && <div>Erreur : {error}</div>}
      <ul>
        {demandes.map(demande => (
          <li key={demande.id}>
            <div>Nom : {demande.nom}</div>
            <div>Email : {demande.email}</div>
            <div>Autres informations...</div>
            <button onClick={() => approuverDemande(demande)}>Approuver</button>
            <button onClick={() => supprimerDemande(demande.id)}>Refuser</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Demand;

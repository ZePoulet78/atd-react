import React, { useState, useEffect } from 'react';
import { userService } from '@/_service/user.service';

const UserProfile = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    roles: []
  });

  useEffect(() => {
    userService.getUserInfo()
      .then(userData => setUser(userData))
      .catch(error => console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error));
  }, []);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userService.updateUser(user.firstName, user.lastName)
      .then(() => alert('Informations mises à jour avec succès'))
      .catch(error => console.error('Erreur lors de la mise à jour des informations :', error));
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Profil Utilisateur</h1>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">Prénom</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Enregistrer</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Informations</h2>
          <p>Email : {user.email}</p>
          <h2 className="mt-4">Rôles</h2>
          <ul className="list-group">
            {user.roles.map((role, index) => (
              <li key={index} className="list-group-item">{role}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
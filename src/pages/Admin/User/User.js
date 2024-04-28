import React, { useState, useEffect } from 'react';
import { userService } from '@/_service/user.service';
import { Link } from 'react-router-dom';




const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    userService.getAllUsers()
      .then(res => {
        setUsers(res.data.users);
        console.log(res.data.users);
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  }, []);

  const delUser = (userId) => {
    userService.deleteUser(userId)
      .then(res => {
        setUsers((current) => current.filter(user => user.id !== userId));
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
      });
  }



  if (!Array.isArray(users) || users.length === 0) {
    return <div>Aucune donnée d'utilisateur à afficher.</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Gestion des Utilisateurs</h2>
      <Link to ="/admin/user/add/"><button className="btn btn-primary btn-sm">Ajouter</button></Link>
      {error && <div className="alert alert-danger">{error}</div>} 
      <table className="table border rounded table-rounded">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Email</th>
            <th scope="col">Téléphone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.lastname}</td>
              <td>{user.firstname}</td>
              <td>{user.email}</td>
              <td>{user.tel}</td>
              <td>
                <button className="bi bi-eye"><img src="/eyes.svg"></img></button>
                <Link to ={`/admin/user/edit/${user.id}`}><button className="btn btn-primary btn-sm">Modifier</button></Link>
                <button className="btn btn-danger btn-sm" onClick={() => delUser(user.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default User;
import React, { useState, useEffect } from 'react';
import {userService} from '@/__service/user.service';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await userService.getAllUsers();
        setUsers(users);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchUsers();
    }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Une erreur s'est produite : {error.message}</div>;
  }

  if (!Array.isArray(users) || users.length === 0) {
    return <div>Aucune donnée d'utilisateur à afficher.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.lastname}</td>
            <td>{user.firstname}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

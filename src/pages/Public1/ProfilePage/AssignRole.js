import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignRole = ({ userId }) => {
  const [roles, setRoles] = useState([]);
  const [selectedRoleId, setSelectedRoleId] = useState('');

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('/api/roles');
        setRoles(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des rôles :', error);
      }
    };

    fetchRoles();
  }, []);

  const handleRoleChange = (event) => {
    setSelectedRoleId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`/api/users/${userId}/assign-role`, { role_id: selectedRoleId });
      alert('Rôle assigné avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'assignation du rôle :', error);
      alert('Une erreur est survenue lors de l\'assignation du rôle');
    }
  };

  return (
    <div>
      <h2>Assigner un rôle</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="role">Sélectionner un rôle :</label>
        <select id="role" value={selectedRoleId} onChange={handleRoleChange}>
          <option value="">Sélectionner un rôle</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
        <button type="submit">Assigner le rôle</button>
      </form>
    </div>
  );
};

export default AssignRole;
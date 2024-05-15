import React, { useState, useEffect } from 'react';
import { roleService } from '@/_service/role.service';
import { userService } from '@/_service/user.service';

const AssignRole = ({ userId }) => {
  const [roles, setRoles] = useState([]);
  const [selectedRoleId, setSelectedRoleId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    roleService
      .indexRoles()
      .then(res => {
        setRoles(res.data.roles);
        console.log(res.data.roles);
        console.log(res);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Une erreur s\'est produite');
        setLoading(false);
      });
  }, []);

  const handleRoleChange = (event) => {
    setSelectedRoleId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
      userService.assignRole(userId, selectedRoleId)
        .then(res => {
          console.log(res);
          window.location.href = '/admin/user';
        })
        .catch(err => {
          console.error(err);
          setError(err.message || 'Une erreur s\'est produite');
        });
  };

  // const assignRole = (userId, roleId) => {
  //   return axios.post(`/api/admin/user/${userId}/role`, { role_id: roleId });
  // };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
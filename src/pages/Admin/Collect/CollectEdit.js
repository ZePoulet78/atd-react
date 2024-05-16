import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collectService } from '@/_service/collect.service';
import { vehicleService } from '@/_service/vehicle.service';
import { userService } from '@/_service/user.service';

const CollectEdit = () => {
  const { id } = useParams();
  const [collect, setCollect] = useState({ date: '', id_vehicule: '', id_user: '' });
  const [vehicles, setVehicles] = useState([]);
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    vehicleService
      .getAllVehicles()
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err) => console.log(err));

    userService
      .showUsersByRole(2)
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => console.log(err));

    if (id) {
      collectService
        .getCollectById(id)
        .then((res) => {
          setCollect(res.data.collect);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const onChange = (e) => {
    setCollect({ ...collect, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(collect);
    collectService
      .updateCollect(collect)
      .then((res) => navigate('../index'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Modifier la collecte</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date de collecte
              </label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={collect.date}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="id_vehicule" className="form-label">
                Véhicule
              </label>
              <select
                className="form-select"
                name="id_vehicule"
                value={collect.id_vehicule}
                onChange={onChange}
              >
                <option value="">Sélectionnez un véhicule</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.model} {vehicle.year}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="id_user" className="form-label">
                Chauffeur
              </label>
              <select
                className="form-select"
                name="id_user"
                value={collect.id_user}
                onChange={onChange}
              >
                <option value="">Sélectionnez un chauffeur</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.firstname} {user.lastname}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Modifier
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CollectEdit;
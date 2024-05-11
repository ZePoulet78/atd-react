import React, { useState } from 'react';
import { accountService } from '@/_service/account.service';

const Register = () => {
  const [error, setError] = useState('');
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    tel: '',
    password: '',
    checkPassword: '',
    role: 0
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'avatar') {
      setFile(e.target.files[0]);
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(''); // Réinitialiser le statut

    const formDataToSend = new FormData();
    formDataToSend.append('avatar', file);
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const res = await accountService.register(formDataToSend);
      console.log(res);
      window.location.href = '/';
    } catch (err) {
      console.error(err);
      setError(err.message || 'Une erreur s\'est produite.');
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 card mt-5 w-75">
            <div className="register-form card-body">
              <h2 className="text-center mb-4">Demande inscription</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-column justify-content-between">
                    <div className="form-group">
                      <label htmlFor="name">Nom :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="lastname"
                        placeholder="Doe"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="firstname">Prénom :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        name="firstname"
                        placeholder="John"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email :</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Téléphone :</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="tel"
                        placeholder="0102030405"
                        value={formData.tel}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-around">
                    <div className="form-group">
                      <label htmlFor="password">Mot de passe :</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirmer mot de passe :</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="checkPassword"
                        placeholder="Confirmer mot de passe"
                        value={formData.checkPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">Avatar</label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        name="avatar"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Suivant
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
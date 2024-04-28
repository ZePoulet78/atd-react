import React, { useState } from 'react';
import ky from 'ky';
import { accountService } from '@/_service/account.service';
import PublicHeader from '@/components/Public/PublicHeader';
import { userService } from '@/_service/user.service';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await ky.post('http://localhost:8000/api/login', {
        json: {
          email,
          password,
        },
        headers: {
          'Accept': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data);
      console.log(data.authToken)
      accountService.saveToken(data.authToken);
      userService.saveUser(data.user);
      console.log(data.user)
      window.location.href = '/admin';
    } catch (err) {
      // const data = await err.response.json();
      // console.log(data)
      setError('Une erreur s\'est produite');
      console.log(err);
    }
  };
  return (
    <div>
      <PublicHeader/>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-5 shadow-sm">
          <h1 className="mb-4">Connexion</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Se souvenir de moi</label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Connexion</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
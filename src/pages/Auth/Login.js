import React, { useState, useEffect } from 'react';
import ky from 'ky';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [csrfToken, setCSRFToken] = useState('');

  useEffect(() => {
    // Fetch the CSRF token on component mount
    const fetchCSRFToken = async () => {
      const response = await ky.get('http://localhost:8000/sanctum/csrf-cookie');
      setCSRFToken(response.headers.get('X-XSRF-TOKEN'));
    };
    fetchCSRFToken();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await ky.post('http://localhost:8000/api/login', {
        json: {
          email,
          password,
        },
        headers: {
          'X-CSRF-TOKEN': csrfToken,
        },
      });

      const data = await response.json();

      // Stocker le jeton d'authentification dans le stockage local
      localStorage.setItem('token', data.token);

      // Rediriger l'utilisateur vers une page protégée
      window.location.href = '/admin/users';
    } catch (err) {
      setError('Identifiants invalides');
      console.log(err);
    }
  };
  return (
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
  );
};

export default Login;
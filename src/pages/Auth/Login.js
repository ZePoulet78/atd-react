import React, { useState } from 'react';
import ky from 'ky';
import { accountService } from '@/_service/account.service';
import { userService } from '@/_service/user.service';
import { FormattedMessage } from 'react-intl';


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

      if(data.user.isRegsitered === 0){
        window.location.href = '/profile/pending';
      }

      if (data.user.role === 0)
        window.location.href = '/admin';
      else
        window.location.href = '/';
    } catch (err) {
      const data = await err;
      // console.log(data)
      setError(data.message);
      console.log(err.message);
    }
  };
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-5 shadow-sm">
          <h1 className="mb-4"><FormattedMessage id='login'></FormattedMessage></h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label"> <FormattedMessage id='email' /> </label>
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
              <label htmlFor="password" className="form-label"> <FormattedMessage id='password'></FormattedMessage></label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe"><FormattedMessage id='rememberMe' /></label>
            </div> */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary"> <FormattedMessage id='login'/> </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
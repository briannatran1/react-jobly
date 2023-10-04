import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';
import Job from '../../express-jobly-solution 2/models/job';

/** App. Renders Nav and Routes for Jobly App. */
function App() {
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  /** logs a user in */
  async function login(formData) {
    const token = await JoblyApi.login(formData);
    setToken(token);

    const userData = await JoblyApi.getUserData(formData.username);
    setCurrentUser(userData);
  }

  /** registers a user */
  async function signup(formData) {
    const token = await JoblyApi.register(formData);
    setToken(token);

    const userData = await JoblyApi.getUserData(formData.username);
    setCurrentUser(userData);
  }

  useEffect(function fetchCurrentUserWhenMounted() {
    async function fetchCurrentUser() {
      const userData = await JoblyApi.getUserData(formData.username);
    }
  });

  /** logs out a user */
  function logout() {
    setToken('');
    setCurrentUser({});
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;

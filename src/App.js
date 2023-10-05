import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';
import userContext from "./userContext";

/** App. Renders Nav and Routes for Jobly App. */
function App() {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [errors, setErrors] = useState([]);

  /** logs a user in */
  async function login(formData) {
    const token = await JoblyApi.login(formData);
    setUsername(formData.username);
    setToken(token);
  }

  /** registers a user */
  async function signup(formData) {
    try {
      const token = await JoblyApi.register(formData);
      setUsername(formData.username);
      setToken(token);
    }
    catch (err) {
      const oneError = err[0].message;
      if (err[0].message.length === 1) {
        setErrors();
      }
      setErrors(err);
    }
  }

  /** Update currentUser when token updates. */
  useEffect(function fetchCurrentUserWhenMounted() {
    async function fetchCurrentUser() {
      const userData = await JoblyApi.getUserData(username);
      setCurrentUser(userData);
    }
    // KEEP EYE ON THIS
    if (username) {
      fetchCurrentUser();
    }
  }, [token]);

  /** logs out a user */
  function logout() {
    setToken('');
    setUsername('');
    setCurrentUser({});
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ currentUser, errors }}>
          <Nav logout={logout} currentUser={currentUser} />
          <RoutesList login={login} signup={signup} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

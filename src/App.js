import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';
import userContext from "./userContext";

/** App. Renders Nav and Routes for Jobly App. */
function App() {
  //FIXME: JWT-decode library npm install this and decode token to extract username in token, can remove username
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  /** logs a user in */
  async function login(formData) {
    const token = await JoblyApi.login(formData);

    setUsername(formData.username);
    setToken(token);
  }

  /** registers a user */
  async function signup(formData) {
    const token = await JoblyApi.register(formData);

    setUsername(formData.username);
    setToken(token);
  }

  /** Update currentUser when token updates. */
  //FIXME: if we have token, then extract username from token
  // if not, do nothing or set currentUser to {}

  useEffect(function fetchCurrentUserWhenMounted() {
    async function fetchCurrentUser() {
      // can set token on class here
      //JoblyApi.token = token
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
    //FIXME: setToken to null
    setToken('');
    //FIXME: get rid of setUsername
    setUsername('');
    setCurrentUser({});
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ currentUser }}>
          <Nav logout={logout} currentUser={currentUser} />
          <RoutesList login={login} signup={signup} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

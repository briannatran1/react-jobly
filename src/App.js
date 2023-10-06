import './App.css';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';
import userContext from "./userContext";
import jwt_decode from "jwt-decode";

/** App. Renders Nav and Routes for Jobly App. */
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState({});
  const [loadedData, setLoadedData] = useState(false);

  /** logs a user in */
  async function login(formData) {
    const token = await JoblyApi.login(formData);

    localStorage.setItem("token", token);
    setToken(token);
  }

  /** registers a user */
  async function signup(formData) {
    const token = await JoblyApi.register(formData);

    localStorage.setItem("token", token);
    setToken(token);
  }

  /** Update currentUser when token updates. */
  useEffect(function fetchCurrentUserWhenMounted() {
    async function fetchCurrentUser() {
      const localToken = localStorage.getItem("token");

      if (localToken) {
        JoblyApi.token = localToken;
        const decoded = jwt_decode(localToken);
        const userData = await JoblyApi.getUserData(decoded.username);
        setCurrentUser(userData);
        setLoadedData(true);
      }
      else {
        setLoadedData(true);
      }
    }
    fetchCurrentUser();
  }, [token]);

  /** logs out a user */
  function logout() {
    setToken(null);
    setCurrentUser({});
    localStorage.removeItem("token");
  }

  /** updates user profile upon saving */
  async function updateProfile(formData) {
    const updatedUser = await JoblyApi.updateUserProfile(formData);
    setCurrentUser(updatedUser);
  }

  if (loadedData === false) {
    return <p>Loading...</p>;
  }
  else {
    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={{ currentUser }}>
            <Nav logout={logout} currentUser={currentUser} />
            <RoutesList
              login={login}
              signup={signup}
              currentUser={currentUser}
              updateProfile={updateProfile} />
          </userContext.Provider>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;

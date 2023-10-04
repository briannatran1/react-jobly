import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';
import userContext from "./userContext";
import Homepage from './Homepage';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';

/** App. Renders Nav and Routes for Jobly App. */
function App() {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  /** logs a user in */
  async function login(formData) {
    const token = await JoblyApi.login(formData);
    setToken(token);
    setUsername(formData.username);
  }

  /** registers a user */
  async function signup(formData) {
    const token = await JoblyApi.register(formData);
    setToken(token);
    setUsername(formData.username);
  }

  /** Update currentUser when token updates. */
  useEffect(function fetchCurrentUserWhenMounted() {
    async function fetchCurrentUser() {
      const userData = await JoblyApi.getUserData(username);
      setCurrentUser(userData);
    }
    fetchCurrentUser();
  }, [token]);

  /** logs out a user */
  function logout() {
    setToken('');
    setCurrentUser({});
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={currentUser}>
          <Homepage />
          <LoginForm />
          <SignupForm />
          <ProfileForm userProfile={currentUser} />
          <CompanyList />
          <CompanyDetail />
          <JobList />
        </userContext.Provider>

        <Nav logout={logout} currentUser={currentUser}/>

        <RoutesList login={login} signup={signup} />
      </BrowserRouter>


    </div>
  );
}

export default App;

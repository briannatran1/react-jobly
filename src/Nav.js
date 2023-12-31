import { NavLink } from "react-router-dom";
import './Nav.css';

/** Nav: Nav bar with links to Homepage, Companies, Jobs.
 *
 * Props:
 * - logout(): function to update state in parent
 * - currentUser: {}
 */
function Nav({ logout, currentUser = {} }) {

  /** renders if user is not logged in */
  function notLoggedIn() {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </li>
      </>
    );
  }

  /** renders if user is logged in */
  function loggedIn() {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/companies">Companies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </li>
        <button
          className='btn link-danger text-decoration-none'
          onClick={logout}>Log Out</button>
      </>
    );
  }

  return (
    <nav className="Nav navbar navbar-light navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Jobly</NavLink>

        <ul className="navbar-nav ms-auto">
          {Object.keys(currentUser).length === 0
            ? notLoggedIn()
            : loggedIn()
          }
        </ul>
      </div>
    </nav >
  );
}

export default Nav;
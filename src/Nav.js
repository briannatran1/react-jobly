import { NavLink } from "react-router-dom";
import './Nav.css';

/** Nav: Nav bar with links to Homepage, Companies, Jobs. */
function Nav({ logout, currentUser = {} }) {
  return (
    <nav className="Nav navbar navbar-light navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Jobly</NavLink>

        <ul className="navbar-nav ms-auto">
          {Object.keys(currentUser).length === 0
            ? <div>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
              </li>
            </div>
            : <div>
              <li className="nav-item">
                <NavLink className="nav-link" to="/companies">Companies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>
              <button onSubmit={logout}>Log Out {currentUser.username}</button>
            </div>
          }
        </ul>
      </div>
    </nav >
  );
}

export default Nav;
import { NavLink } from "react-router-dom";

/** Nav: Nav bar with links to Homepage, Companies, Jobs. */
function Nav() {
  return (
    <nav className="Nav navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Jobly</NavLink>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/companies">Companies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Nav;
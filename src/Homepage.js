import { useContext } from 'react';
import userContext from './userContext';
import { Link } from 'react-router-dom';
import "./Homepage.css";

/** Homepage: Welcome page.
 *
 * Context:
 * -userContext {}
 *
 * RoutesList -> Homepage
*/
function Homepage() {
  const { currentUser } = useContext(userContext);

  return (
    <div className="Homepage">
      <h1 className="mt-4">Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {!currentUser.user
        ? <div>
          <Link to='/login' className='btn btn-secondary me-3'>Login</Link>
          <Link to='/signup' className='btn btn-success'>Signup</Link>
        </div>
        : <div>
          <h3>Welcome Back, {currentUser.user.username}!</h3>
        </div>}
    </div>
  );
}

export default Homepage;;;
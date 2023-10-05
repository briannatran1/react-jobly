import { useContext } from 'react';
import userContext from './userContext';
import { Link } from 'react-router-dom';

/** Homepage: Welcome page.
 *
 * RoutesList -> Homepage
*/
function Homepage() {
  const { currentUser } = useContext(userContext);

  return (
    <div>
      <h1 className="mt-4">Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {!currentUser.user
        ? <div>
          <Link to='/login' className='btn btn-secondary me-3'>Login</Link>
          <Link to='/signup' className='btn btn-primary'>Signup</Link>
        </div>
        : <div>
          <h3>Welcome Back, {currentUser.user.username}!</h3>
        </div>}
    </div>
  );
}

export default Homepage;;;
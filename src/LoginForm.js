import { useState, useContext } from "react";
import userContext from "./userContext";
import { Navigate } from 'react-router-dom';
import Alert from "./Alert";

/** LoginForm: for authentication.
 *
 * State:
 * - formData: {}
 * - errors: []
 *
 * Context:
 * - userContext {}
 *
 * RoutesList -> LoginForm */

function LoginForm({ login }) {
  const initialState = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState([]);
  const { currentUser } = useContext(userContext);

  /** submits form and checks for errors */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
    }
    catch (err) {
      setErrors(err);
    }
  }

  /** updates formData */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(curr => ({
      ...curr,
      [name]: value,
    }));
  }

  if (currentUser.user) return <Navigate to='/' />;

  return (
    <>
      <form onSubmit={handleSubmit} className='w-50 mt-4 mx-auto'>
        <div className='mb-3'>
          <label className="form-label" htmlFor="login-username"><b>Username</b></label>
          <input
            aria-label="username"
            className='form-control form-control-sm'
            id="login-username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className='mb-3'>
          <label className="form-label" htmlFor="login-password"><b>Password</b></label>
          <input
            type="password"
            aria-label="password"
            className='form-control form-control-sm'
            id="login-password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {errors.length > 0 &&
          <Alert errors={errors[0].message} />}

        <button
          className="btn btn-primary"
        >Submit</button>
      </form >
    </>
  );
}

export default LoginForm;
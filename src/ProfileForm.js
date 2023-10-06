import { useState, useContext } from "react";
import userContext from "./userContext";
import Alert from "./Alert";

/** ProfileForm: for editing profile details.
 *
 * State:
 * - formData: {}
 *
 * Context:
 * - currentUser {user: {}}
 *
 * RoutesList -> ProfileForm
 */
function ProfileForm({ updateProfile }) {
  const { currentUser } = useContext(userContext);


  const initialState = {
    username: currentUser.user.username,
    firstName: currentUser.user.firstName,
    lastName: currentUser.user.lastName,
    email: currentUser.user.email,
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await updateProfile(formData);
    }
    catch (err) {
      console.log("errors inside profileform", errors)
      console.log("err object in catch block", err)
      setErrors(err);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(curr => ({
      ...curr,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit} className='w-50 mt-4 mx-auto'>
      <div className='mb-3'>
        <label className="form-label" htmlFor="profile-username"><b>Username</b></label>
        <input
          aria-label="username"
          disabled={true}
          className='form-control form-control-sm'
          id="profile-username"
          name="username"
          placeholder={currentUser.user.username}
          onChange={handleChange}
        />
      </div>

      <div className='mb-3'>
        <label className="form-label" htmlFor="profile-firstName"><b>First Name</b></label>
        <input
          aria-label="firstName"
          className='form-control form-control-sm'
          id="profile-firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>

      <div className='mb-3'>
        <label className="form-label" htmlFor="profile-lastName"><b>Last Name</b></label>
        <input
          aria-label="lastName"
          className='form-control form-control-sm'
          id="profile-lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <div className='mb-3'>
        <label className="form-label" htmlFor="profile-email"><b>Email</b></label>
        <input
          aria-label="email"
          className='form-control form-control-sm'
          id="profile-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {errors.length > 0 &&
        <Alert errors={errors[0].message} />}

      <button
        className="btn btn-primary"
      >Save Changes</button>
    </form>
  );
}

export default ProfileForm;
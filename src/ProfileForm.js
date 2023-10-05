import { useState } from "react";

/** ProfileForm: for editing profile details.
 *
 * RoutesList -> ProfileForm
 */
function ProfileForm({ userProfile }) {

  //TODO: bring in context to initalState to pre-populate

  const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialState);

  // function updateProfile() {
  // }

  function handleSubmit(evt) {
    evt.preventDefault();
    //updateProfile()
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
          placeholder={formData.username}
          onChange={handleChange}
          required
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
          required
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
          required
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
          required
        />
      </div>

      <button
        className="btn btn-primary"
      >Save Changes</button>
    </form>
  );
}

export default ProfileForm;
import { useState } from "react";

/** ProfileForm: for editing profile details.
 *
 * RoutesList -> ProfileForm
 */
function ProfileForm({ updateProfile, userProfile }) {
  const initialState = {
    username: "dummyusername",//
    firstName: "Nathan",//,
    lastName: "tesst",//,
    email: "@",//,
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
        <label className="form-label" htmlFor="username"><b>Username</b></label>
        <input
          aria-label="username"
          disabled={true}
          className='form-control form-control-sm'
          id="username"
          name="username"
          placeholder={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className='mb-3'>
        <label className="form-label" htmlFor="firstName"><b>First Name</b></label>
        <input
          aria-label="firstName"
          className='form-control form-control-sm'
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className='mb-3'>
        <label className="form-label" htmlFor="lastName"><b>Last Name</b></label>
        <input
          aria-label="lastName"
          className='form-control form-control-sm'
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className='mb-3'>
        <label className="form-label" htmlFor="email"><b>Email</b></label>
        <input
          aria-label="email"
          className='form-control form-control-sm'
          id="email"
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
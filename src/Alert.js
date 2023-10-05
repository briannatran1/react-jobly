/**
 * Alert: Display all alert messages.
 *
 * {LoginForm, SignupForm, ProfileForm} -> Alert
*/

function Alert({ errors }) {
  return (
    <div className="alert alert-danger">
      {
        errors.map((error, idx) => (
          <p key={idx}>{error}</p>
        ))
      }
    </div>
  );

}

export default Alert;
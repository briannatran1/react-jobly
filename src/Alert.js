/**
 * Alert: Display all alert messages.
 *
 * Props:
 * - errors: str or []
 *
 * {LoginForm, SignupForm, ProfileForm} -> Alert
*/

function Alert({ errors }) {

  return (
    <div className="alert alert-danger">
      {Array.isArray(errors)
        ? errors.map((error, idx) => (
          <p key={idx}>{error}</p>
        ))
        : <p>{errors}</p>
      }
    </div>
  );
}

export default Alert;
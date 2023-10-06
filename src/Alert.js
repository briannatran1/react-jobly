/**
 * Alert: Display all alert messages.
 *
 * Props:
 * - errors: str or []
 *
 * {LoginForm, SignupForm, ProfileForm} -> Alert
*/

function Alert({ isSuccess, errors = [] }) {
  return (
    <div>
      {!isSuccess &&
        <div className="alert alert-danger">
          {Array.isArray(errors)
            ? errors.map((error, idx) => (
              <p key={idx}>{error}</p>
            ))
            : <p>{errors}</p>
          }
        </div>}

      {isSuccess &&
        <div className="alert alert-success">
          <p>Changes saved.</p>
        </div>}
    </div>
  );
}

export default Alert;
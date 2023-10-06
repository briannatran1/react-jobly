/**
 * Alert: Display success alert message.
 *
 * Props:
 * - errors: str or []
 *
 * {ProfileForm} -> AlertSuccess
*/

function AlertSuccess() {
  return (
    <div className="alert alert-success">
      <p>Changes saved.</p>
    </div>
  );
}

export default AlertSuccess;
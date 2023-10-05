

/** Display all alert messages. */

function Alert({ errors }) {
  return (
    <>
    {
      errors.message.map((error,idx) => (
        <p key={idx}>{error}</p>
      ))
    }
    </>
  );

}

export default Alert;
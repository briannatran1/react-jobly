import { useState } from 'react';

/** SearchForm:
 *
 * State:
 * - formData like {}
 *
 * Props:
 * - setSearch(): fn to set state in parent
 */

function SearchForm({ setSearch }) {
  const [formData, setFormData] = useState({ nameLike: "" });

  function handleSubmit(evt) {
    console.log("form data in searchform", formData);
    evt.preventDefault();
    setSearch(formData);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit} className='w-50 mt-4 mx-auto'>
      <div className='input-group'>
        <input
          className='form-control form-control-sm'
          id="nameLike"
          name="nameLike"
          value={formData.nameLike}
          onChange={handleChange}
          placeholder='Enter search term...'
        >
        </input>
        <button
          className="btn btn-primary"
          disabled={!formData.nameLike}>Submit</button>
      </div>
    </form>
  );
}

export default SearchForm;
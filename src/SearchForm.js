import { useState } from 'react';

/** SearchForm: search form for jobs and companies to filter
 *
 * State:
 * - formData like {}
 *
 * Props:
 * - setSearch(): fn to set state in parent
 *
 * {CompanyList, JobList} -> SearchForm
 */

function SearchForm({ setSearch }) {
  const [formData, setFormData] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    setSearch(formData);
  }

  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(value);
  }

  return (
    <form onSubmit={handleSubmit} className='w-50 mt-4 mx-auto'>
      <div className='input-group'>
        <input
          className='form-control form-control-sm'
          id="search"
          name="search"
          value={formData}
          onChange={handleChange}
          placeholder='Enter search term...'
        >
        </input>
        <button
          className="btn btn-primary"
        >Submit</button>
      </div>
    </form>
  );
}

export default SearchForm;
import { useState } from 'react';
import { debounce } from 'lodash';

/** SearchForm: search form for jobs and companies to filter
 *
 * State:
 * - formData like ""
 *
 * Props:
 * - updateSearch(): fn to set state in parent
 *
 * {CompanyList, JobList} -> SearchForm
 */

function SearchForm({ updateSearch }) {
  const [formData, setFormData] = useState('');

  /** Prevent default and update state in parent */
  function handleSubmit(evt) {
    evt.preventDefault();
    updateSearch(formData);
  }

  /** Update state for form values. */
  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(value);
  }

  /** handles searchTerm change and then submits */
  // function handleChangeAndSubmit(evt) {
  //   evt.preventDefault();
  //   handleChange(evt);
  //   return debounce(handleSubmit, 1000);
  // }

  return (
    <form onSubmit={handleSubmit} className='w-50 mt-4 mx-auto'>
      <div className='input-group'>
        <input
          aria-label="search"
          className='form-control form-control-sm'
          id="search"
          name="search"
          value={formData}
          onChange={handleChange}
          placeholder='Enter search term...'
        >
        </input>
        <button
          className="btn btn-success"
        >Submit</button>
      </div>
    </form>
  );
}

export default SearchForm;
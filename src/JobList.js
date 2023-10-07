import JoblyApi from "./api";
import { useState, useEffect, useContext } from 'react';
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import userContext from "./userContext";
import debounce from 'lodash';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** JobList: Show all jobs and a search form to filter.
 *
 * State:
 * - jobs like [{job}, ...]
 * - searchTerm: {}
 * - isLoading: boolean
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { currentUser } = useContext(userContext);

  /** Update jobs state when searchTerm is updated. */
  useEffect(function fetchJobsWhenMounted() {
    async function fetchJobs() {
      setIsLoading(true);
      setJobs(await JoblyApi.filterJobs(searchTerm));
      setIsLoading(false);
    }
    fetchJobs();
  }, [searchTerm]);

  /** Update searchTerm state. */
  function updateSearch(newSearchTerm) {
    setSearchTerm(newSearchTerm);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (currentUser.user) {
    return (
      <div className="JobList">
        <SearchForm updateSearch={updateSearch} />
        {jobs.length === 0 &&
          <h5 className="mt-4">Sorry, no results were found!</h5>}

        <JobCardList jobs={jobs} />
      </div>
    );
  }

  // return <Navigate to='/' />;
}


export default JobList;;
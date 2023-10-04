import JoblyApi from "./api";
import { useState, useEffect } from 'react';
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

/** JobList: Show all jobs and a search form to filter.
 *
 * State:
 * - jobs like [{job}, ...]
 * - searchTerm: {}
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchJobsWhenMounted() {
    async function fetchJobs() {
      setIsLoading(true);
      setJobs(await JoblyApi.filterJobs(searchTerm));
      setIsLoading(false);
    }
    fetchJobs();
  }, [searchTerm]);

  /** updating searchTerm state */
  function setSearch(newSearchTerm) {
    setSearchTerm(newSearchTerm);
  }

  return (
    <>
      {isLoading === true
        ? <h1>Loading...</h1>
        :
        <>
          <SearchForm setSearch={setSearch} />
          {jobs.length === 0 &&
            <h5 className="mt-4">Sorry, no results were found!</h5>}

          <JobCardList jobs={jobs} />
        </>
      }
    </>
  );
}


export default JobList;
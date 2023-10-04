import JoblyApi from "./api";
import { useState, useEffect } from 'react';
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

/** CompanyList: render all companies based on an optional filter
 *
 * State:
 * - companies like [{company},...]
 * - searchTerm: obj
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 *
*/

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      setIsLoading(true);
      setCompanies(await JoblyApi.filterCompanies(searchTerm));
      setIsLoading(false);
    }
    fetchCompanies();
  }, [searchTerm]);

  /** updating searchTerm state */
  function updateSearch(newSearchTerm) {
    setSearchTerm(newSearchTerm);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="CompanyList">
      <SearchForm updateSearch={updateSearch} />
      {companies.length === 0 &&
        <h5 className="mt-4">Sorry, no results were found!</h5>}

      {companies.map(company => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
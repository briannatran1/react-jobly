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

  //TODO: change name
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
          {companies.length === 0 &&
            <h5 className="mt-4">Sorry, no results were found!</h5>}

          {companies.map(company => (
            <CompanyCard key={company.handle} company={company} />
          ))}
        </>
      }
    </>
  );
}

export default CompanyList;
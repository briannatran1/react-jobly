import JoblyApi from "./api";
import { useState, useEffect, useContext } from 'react';
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import userContext from "./userContext";
import { Navigate } from 'react-router-dom';

/** CompanyList: render all companies based on an optional filter.
 *
 * State:
 * - companies like [{company},...]
 * - searchTerm: obj
 * - isLoading: boolean
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 *
*/

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  // const [loadedCurrentUser, setLoadedCurrentUser] = useState(false); FIXME:

  const { currentUser } = useContext(userContext);

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

  if (currentUser.user && loadedCurrentUser === false) {
    setLoadedCurrentUser(true);
  }
  if (isLoading || !loadedCurrentUser) return <h1>Loading...</h1>;

  if (loadedCurrentUser) {
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

return <Navigate to='/' />;
}

export default CompanyList;
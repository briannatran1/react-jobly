import JoblyApi from "./api";
import { useState, useEffect } from 'react';
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

/** CompanyList:
 *
 * State:
 * - companies like [{company},...]
 * - searchTerm: obj
 *
*/

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState({});

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      setCompanies(await JoblyApi.filterCompanies(searchTerm));
    }
    fetchCompanies();
  }, [searchTerm]);

  /** updating searchTerm state */
  function setSearch(newSearchTerm) {
    setSearchTerm(newSearchTerm);
    console.log("searchTerm inside companylist", searchTerm);
  }



  return (
    <>
      <SearchForm setSearch={setSearch} />

      {companies.map(company => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </>
  );
}

export default CompanyList;
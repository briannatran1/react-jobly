import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import JoblyApi from './api';
import JobCardList from './JobCardList';

//IN THE FUTURE: notFound rename to errors and set as empty arr
// display errors in arr

/** CompanyDetail: renders details about a company
 *
 * State:
 * - company like {handle, name, description, numEmployees, logoUrl, jobs: []}
 *
 * RoutesList -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const [company, setCompany] = useState({});
  const [notFound, setNotFound] = useState(false);

  const params = useParams();

  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
      try {
        const companyData = await JoblyApi.getCompany(params.handle);
        setCompany(companyData);
      }
      catch {
        setNotFound(true);
      }
    }
    fetchCompany();
  }, []);

  return (
    <>
      {notFound === true && <h1>Company Not Found</h1>}

      {Object.keys(company).length === 0
        ? <h1>Loading...</h1>
        : <div>
          <h4>{company.name}</h4>
          <p>{company.description}</p>

          <JobCardList jobs={company.jobs} />
        </div>
      }
    </>
  );
}

export default CompanyDetail;

import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import JoblyApi from './api';
import JobCardList from './JobCardList';

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
        setCompany(await JoblyApi.getCompany(params.handle));
      }
      catch {
        setNotFound(true);
      }
    }
    fetchCompany();
  }, []);

  return (
    <>
      {notFound === true && <Navigate to="/" />}

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

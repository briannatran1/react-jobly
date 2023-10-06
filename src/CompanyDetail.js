import { useEffect, useState, useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import JoblyApi from './api';
import JobCardList from './JobCardList';
import userContext from './userContext';


/** CompanyDetail: renders details about a company
 *
 * State:
 * - company like {handle, name, description, numEmployees, logoUrl, jobs: []}
 * - notFound = boolean
 *
 * RoutesList -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const [company, setCompany] = useState({});
  const [notFound, setNotFound] = useState(false);

  const params = useParams();
  const { currentUser } = useContext(userContext);

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

  if (currentUser.user) {
    return (
      <>
        {notFound === true && <h1>Company Not Found</h1>}

        {Object.keys(company).length === 0
          ? <h1>Loading...</h1>
          : <div className='CompanyDetail'>
            <h4>{company.name}</h4>
            <p>{company.description}</p>

            <JobCardList jobs={company.jobs} />
          </div>
        }
      </>
    );
  }

  return <Navigate to='/' />;
}

export default CompanyDetail;

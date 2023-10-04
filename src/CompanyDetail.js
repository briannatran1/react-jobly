import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';
import Job from './Job';

/** CompanyDetail
 *
 * State:
 * - company like {handle, name, description, numEmployees, logoUrl, jobs: []}
 *
 */

function CompanyDetail() {
  const [company, setCompany] = useState({});

  const params = useParams(); // {handle}
  const handle = params.handle;

  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }
    fetchCompany();
  }, []);

  return (
    <div>
      <h4>{company.name}</h4>
      <p>{company.description}</p>

      {company.jobs.map(job => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
}

export default CompanyDetail;

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';

/** CompanyDetail
 *
 * State:
 * - company like {handle, name, description, numEmployees, logoUrl, jobs: []}
 *
 */

function CompanyDetail() {
  return <h1>I AM COMPANY DETAIL</h1>;
}

export default CompanyDetail;

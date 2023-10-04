import { Link } from 'react-router-dom';

/** CompanyCard: renders details about a specific company
 *
 * Props:
 * - company like
 * {handle, name, description, numEmployees, logoUrl, jobs: []}
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <div className="card w-75 mb-4 mt-4 mx-auto">
      <div>
        {company.logoUrl &&
          <img className="pt-3" src={company.logoUrl} alt={company.handle} width={60} />}
        <h6 className="pt-3"> <Link to={`/companies/${company.handle}`}>{company.name}</Link></h6>
      </div>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyCard;
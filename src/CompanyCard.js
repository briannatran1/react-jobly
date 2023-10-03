
/** CompanyCard:
 *
 * Props:
 * - company like
 * {handle, name, description, numEmployees, logoUrl, jobs: []}
 *
 */

function CompanyCard({ company }) {
  return (
    <div className="card">
      {company.logoUrl &&
        <img src={company.logoUrl} alt={company.handle} width={60} />}
      <h6>{company.name}</h6>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyCard;
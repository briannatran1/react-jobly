import "./JobCard.css"

/** JobCard: Render details about a job.
 *
 * Prop:
 * - job: object {id, title, salary, equity}
 *
 * JobCardList -> JobCard
 */

function JobCard({ job }) {
  return (
    <div className="JobCard card w-75 mb-4 mt-4 mx-auto">
      <h5 className="JobCard-title pt-3"><b>{job.title}</b></h5>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  );
}

export default JobCard;
/** Job: Render details about a job.
 * JobCardList -> Job
 */

function Job({ job }) {
  return (
    <div className="card w-75 mb-4 mt-4 mx-auto">
      <h4 className="pt-3">{job.title}</h4>
      <h5>Salary: {job.salary}</h5>
      <h5>Equity: {job.equity}</h5>
    </div>
  );
}

export default Job;
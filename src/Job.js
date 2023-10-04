/** Job: Render details about a job.
 *
 * JobCardList -> Job
 */

//change component name to JobCard
function Job({ job }) {
  return (
    <div className="card w-75 mb-4 mt-4 mx-auto">
      <h5 className="pt-3">{job.title}</h5>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  );
}

export default Job;
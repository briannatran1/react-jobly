import Job from "./Job";

/** JobCardList: renders all jobs
 *
 * Props:
 * - jobs like [{job}, ...]
 *
 * CompanyDetail -> JobCardList -> Job
 *
 */
function JobCardList({ jobs }) {
  return (
    jobs.map(job => (
      <Job key={job.id} job={job} />
    ))
  );
}

export default JobCardList;
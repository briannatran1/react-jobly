import Job from "./Job";

/** JobCardList
 *
 * Props:
 * - jobs like [{job}, ...]
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
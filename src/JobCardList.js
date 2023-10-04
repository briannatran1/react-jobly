import JobCard from "./JobCard";

/** JobCardList: renders all jobs
 *
 * Props:
 * - jobs like [{job}, ...]
 *
 * CompanyDetail -> JobCardList -> JobCard
 *
 */
function JobCardList({ jobs }) {
  return (
    jobs.map(job => (
      <JobCard key={job.id} job={job} />
    ))
  );
}

export default JobCardList;
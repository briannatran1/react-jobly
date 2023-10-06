import { useContext } from "react";
import userContext from "./userContext";
import { useState } from "react";
import "./JobCard.css";

/** JobCard: Render details about a job.
 *
 * Prop:
 * - job: object {id, title, salary, equity}
 *
 * JobCardList -> JobCard
 */

function JobCard({ job }) {
  const { applyToJob, currentUser, applicationIds } = useContext(userContext);

  async function applyViaJobCard(){
    try {
      await applyToJob(currentUser.user.username, job.id);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="JobCard card w-75 mb-4 mt-4 mx-auto">
      <h5 className="JobCard-title pt-3"><b>{job.title}</b></h5>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>

      <button
      onClick={applyViaJobCard}
      className='btn btn-success w-20 mx-auto mb-4'
      disabled={applicationIds.includes(job.id)}>
        {applicationIds.includes(job.id) ? "Applied" : "Apply"}
        </button>
    </div>
  );
}

export default JobCard;
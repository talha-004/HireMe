import React from "react";
import LatestJobsCards from "./LatestJobsCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div className="text-center text-slate-800   flex flex-col items-center justify-center gap-6 py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight font-stack">
        <span className="text-[#f83002]"> Big Opportunities </span> <br />
        Waiting for You
      </h1>

      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <= 0 ? (
          <span> No Job Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => <LatestJobsCards key={job?._id} job={job} />)
        )}
      </div>

      {/* cards */}
    </div>
  );
};

export default LatestJobs;

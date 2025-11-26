import React from "react";
import LatestJobsCards from "./LatestJobsCards";
const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  return (
    <div className="text-center text-slate-800   flex flex-col items-center justify-center gap-6 py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight font-stack">
        <span className="text-[#f83002]"> Big Opportunities </span> <br />
        Waiting for You
      </h1>

      <div className="grid grid-cols-3 gap-4 my-5">
        {jobs.slice(0, 6).map((ele, idx) => (
          <LatestJobsCards key={idx} />
        ))}
      </div>

      {/* cards */}
    </div>
  );
};

export default LatestJobs;

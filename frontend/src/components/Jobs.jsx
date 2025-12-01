import React from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import useGetAllJobs from "@/hooks/useGetAllJobs";

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div className="max-w-[1400px] mx-auto mt-5 px-6">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-20%">
          <FilterCard />
        </div>
        {allJobs?.length <= 0 ? (
          <span>Job not found</span>
        ) : (
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allJobs?.map((job) => (
                <div key={job?._id}>
                  <Job job={job} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;

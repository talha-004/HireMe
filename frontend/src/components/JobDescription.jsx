import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useParams } from "react-router-dom";
// import useGetSingleJob from "@/hooks/useGetSingleJob";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const JobDescription = () => {
  const params = useParams();
  const jobId = params.id;
  const [isApplied, setIsApplied] = useState(false);

  // useGetSingleJob(jobId);
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        {},
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setIsApplied(true);
        const updateSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updateSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            singleJob?.applications?.some((one) => one.applicant == user?._id)
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch]);
  console.log(isApplied);

  return (
    <div className="max-w-7xl mx-auto p-4 my-10">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-semibold text-4xl font-stack">
            {singleJob?.title}
          </h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-[#f83002] font-bold" variant="secondary">
              {singleJob?.positions} Positions
            </Badge>
            <Badge className="text-[#f83002]  font-bold" variant="secondary">
              {singleJob?.jobType}
            </Badge>
            <Badge className="text-[#f83002]  font-bold" variant="secondary">
              {singleJob?.salary} Lpa
            </Badge>
          </div>
        </div>

        {isApplied ? (
          <Button className="bg-green-600 hover:bg-green-600 cursor-not-allowed">
            <Check /> Apply Successfully
          </Button>
        ) : (
          <Button
            onClick={applyJobHandler}
            className="bg-slate-800 cursor-pointer hover:bg-slate-700 text-base font-medium rounded-lg  px-6 "
          >
            Apply Now
          </Button>
        )}
      </div>
      <h3 className="border-b-2 border-b-slate-300 font-medium my-4 py-4">
        Job Description:
      </h3>
      <div>
        <h3 className="font-bold my-1">
          Role:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.title}
          </span>
        </h3>
        <h3 className="font-bold my-1">
          Location:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.location}
          </span>
        </h3>
        <h3 className="font-bold my-1">
          Description:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.description}
          </span>
        </h3>
        <h3 className="font-bold my-1">
          Experience:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.experienceLevel}
            Years
          </span>
        </h3>
        <h3 className="font-bold my-1">
          Salary:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.salary}
            LPA
          </span>
        </h3>
        <h3 className="font-bold my-1">
          Total Applicansts:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.applications.length}
          </span>
        </h3>
        <h3 className="font-bold my-1">
          Post Date:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.createdAt.split("T")[0]}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default JobDescription;

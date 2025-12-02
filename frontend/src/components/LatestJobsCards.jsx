import React from "react";
import { Badge } from "./ui/badge";

const LatestJobsCards = ({ job }) => {
  return (
    <div className="p-5 rounded-2xl shadow-xl shadow-orange-50 bg-white border-2 border-slate-200 cursor-pointer">
      <div>
        <h3 className="font-medium text-lg">{job?.company?.name}</h3>
        <p className="text-sm text-gray-500  0">India</p>
      </div>
      <div>
        <h3 className="font-bold text-lg my-2">{job?.title}</h3>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-[#f83002] font-bold" variant="secondary">
          {job?.positions} Positions
        </Badge>
        <Badge className="text-[#f83002]  font-bold" variant="secondary">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#f83002]  font-bold" variant="secondary">
          {job?.salary} Lpa
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobsCards;

import React from "react";
import { Badge } from "./ui/badge";

const LatestJobsCards = () => {
  return (
    <div className="p-5 rounded-2xl shadow-xl shadow-orange-50 bg-white border-2 border-slate-200 cursor-pointer">
      <div>
        <h3 className="font-medium text-lg">Comapny Name</h3>
        <p className="text-sm text-gray-50  0">India</p>
      </div>
      <div>
        <h3 className="font-bold text-lg my-2">Job Title</h3>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-[#f83002] font-bold" variant="secondary">
          12 Positions
        </Badge>
        <Badge className="text-[#f83002]  font-bold" variant="secondary">
          Part Time
        </Badge>
        <Badge className="text-[#f83002]  font-bold" variant="secondary">
          24 Lpa
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobsCards;

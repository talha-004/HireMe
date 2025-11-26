import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { BadgeCheck, Check } from "lucide-react";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className="max-w-7xl mx-auto p-4 my-10">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-semibold text-4xl font-stack">
            Fullstack Developer
          </h1>
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

        {isApplied ? (
          <Button className="bg-green-600 hover:bg-green-600 cursor-not-allowed">
            {" "}
            <Check /> Apply Successfully
          </Button>
        ) : (
          <Button className="bg-slate-800 cursor-pointer hover:bg-slate-700 text-base font-medium rounded-lg  px-6 ">
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
            Frontend Developer
          </span>
        </h3>
        <h3 className="font-bold my-1">
          Location:
          <span className="pl-4 font-normal text-gray-800">
            Frontend Developer
          </span>
        </h3>
        <h3 className="font-bold my-1">
          Description:
          <span className="pl-4 font-normal text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis saepe eos, enim, aliquid recusandae aperiam nam
            aspernatur doloremque quibusdam nihil reiciendis accusamus sint quam
            maxime velit quas iste nulla, sapiente obcaecati placeat voluptas?
            Accusantium praesentium magni temporibus esse necessitatibus nisi ea
            ipsum veritatis. Mollitia facere nemo iusto enim at? Eveniet.
          </span>
        </h3>
        <h3 className="font-bold my-1">
          Experience:
          <span className="pl-4 font-normal text-gray-800">2 Years</span>
        </h3>
        <h3 className="font-bold my-1">
          Salary:
          <span className="pl-4 font-normal text-gray-800">12LPA</span>
        </h3>
        <h3 className="font-bold my-1">
          Total Applicansts:
          <span className="pl-4 font-normal text-gray-800">
            Frontend Developer
          </span>
        </h3>
        <h3 className="font-bold my-1">
          Post Date:
          <span className="pl-4 font-normal text-gray-800">17-07-2025</span>
        </h3>
      </div>
    </div>
  );
};

export default JobDescription;

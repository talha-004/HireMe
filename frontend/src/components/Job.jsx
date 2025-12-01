import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  const daysAgoFun = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };
  return (
    <div className="p-5 rounded-2xl   bg-white border border-slate-200 ">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFun(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFun(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button variant="outline" className="p-6" size="icon">
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@maxleiter" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p>
          {job?.description.length <= 110
            ? job?.description
            : job?.description.slice(0, 110) + "..."}
        </p>
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

      <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
          onClick={() => navigate(`/jobs/description/${job?._id}`)}
        >
          Details
        </Button>
        <Button>Save Later</Button>
      </div>
    </div>
  );
};

export default Job;

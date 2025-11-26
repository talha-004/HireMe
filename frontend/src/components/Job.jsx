import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "6a5s4dfa6sdf4";
  return (
    <div className="p-5 rounded-2xl   bg-white border border-slate-200 ">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
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
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id tenetur
          voluptatibus at eligendi natus excepturi perspiciatis consequatur
          sapiente totam velit.
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

      <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
          onClick={() => navigate(`/description/${jobId}`)}
        >
          Details
        </Button>
        <Button>Save Later</Button>
      </div>
    </div>
  );
};

export default Job;

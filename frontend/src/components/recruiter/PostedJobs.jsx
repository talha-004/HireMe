import React, { useState } from "react";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import CompaniesTable from "./CompaniesTable";
import { Button } from "../ui/button";

const PostedJobs = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex items-center justify-between my-5">
        <Input
          className="w-fit"
          placeholder="Filter by name, role"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={() => navigate("/admin/jobs/create")}>New Jobs</Button>
      </div>
      <CompaniesTable />
    </div>
  );
};

export default PostedJobs;

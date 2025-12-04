import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";

const Companies = () => {
  const navigate = useNavigate();
  useGetAllCompanies();
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex items-center justify-between my-5 gap-5">
        <Input
          className="w-full"
          onInput={(e) => setSearchInput(e.target.value)}
          placeholder="Filter by name"
        />
        <Button onClick={() => navigate("/r/companies/create")}>
          New Company
        </Button>
      </div>
      <CompaniesTable searchInput={searchInput} />
    </div>
  );
};

export default Companies;

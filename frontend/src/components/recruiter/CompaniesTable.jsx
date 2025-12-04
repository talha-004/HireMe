import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { PopoverContent } from "../ui/popover";
import { Badge } from "../ui/badge";

const CompaniesTable = ({ searchInput }) => {
  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);
  const [filterCompany, setFilterCompany] = useState(companies);

  useEffect(() => {
    const filterData = companies.filter((company) => {
      if (!searchInput) {
        return true;
      }
      return company?.name?.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilterCompany(filterData);
  }, [companies, searchInput]);
  const handleCompanyDelete = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">Name</TableHead>
            <TableHead className="font-semibold ">Location</TableHead>
            <TableHead className="font-semibold">Website</TableHead>
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="text-right font-semibold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.length <= 0 ? (
            <span>No company registered yet — let’s get started!</span>
          ) : (
            <>
              {filterCompany?.map((company) => (
                <TableRow
                  key={company?._id}
                  className="hover:bg-white text-base"
                >
                  <TableCell className="flex gap-2 items-center">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@maxleiter"
                        className="max-w-8 rounded-lg"
                      />
                    </Avatar>
                    {company?.name}
                  </TableCell>
                  <TableCell className="align-top px-0">
                    {company?.location?.length ? (
                      <Badge variant="secondary" className="text-sm">
                        {company?.location}
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="text-gray-400 text-sm "
                      >
                        No Data
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <a
                      href={
                        company?.website?.startsWith("http")
                          ? company.website
                          : "https://" + company?.website
                      }
                      target="_blank"
                    >
                      {company?.website}
                    </a>
                  </TableCell>

                  <TableCell>{company?.createdAt?.split("T")[0]}</TableCell>
                  <TableCell className="flex justify-end">
                    <Popover>
                      <PopoverTrigger className="cursor-pointer">
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-28 p-2 flex flex-col gap-2">
                        <Button
                          variant="secondary"
                          onClick={() => {
                            navigate(`/r/companies/${company?._id}`);
                          }}
                          className="flex justify-start items-center  gap-2 w-full  cursor-pointer bg-slate-100 hover:bg-slate-200"
                        >
                          <Edit2 className="w-4" />
                          <span>Edit</span>
                        </Button>
                        <Button
                          variant="outline"
                          onClick={(e) => {
                            handleCompanyDelete(e);
                          }}
                          className="flex justify-start items-center  gap-2 w-full  cursor-pointer bg-red-50 border-red-50 hover:bg-red-100"
                        >
                          <Trash2 className="w-4" />
                          <span>Delete</span>
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;

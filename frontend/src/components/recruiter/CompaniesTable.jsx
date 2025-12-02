import React from "react";
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
import { Edit2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import useGetSingleCompanyById from "@/hooks/useGetSingleCompanyById";

const CompaniesTable = () => {
  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);

  const [filterCompany, setFilterCompany] = useState(companies);
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.length <= 0 ? (
            <span>No company registered yet — let’s get started!</span>
          ) : (
            <>
              {companies?.map((company) => (
                <>
                  <TableRow>
                    <TableCell>
                      <Avatar className="cursor-pointer">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@maxleiter"
                          className="w-12 rounded-lg"
                        />
                      </Avatar>
                    </TableCell>
                    <TableCell>{company?.name}</TableCell>
                    <TableCell>{company?.createdAt?.split("T")[0]}</TableCell>
                    <TableCell className="flex justify-end">
                      <Button
                        onClick={() => {
                          navigate(`/r/companies/${company?._id}`);
                        }}
                        className="flex items-center gap-2 w-fit  cursor-pointer"
                      >
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;

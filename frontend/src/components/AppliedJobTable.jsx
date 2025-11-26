import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";

const AppliedJobTable = () => {
  return (
    <div className="border p-4 rounded-2xl mt-4 border-slate-200">
      <Table>
        <TableCaption>A list of Jobs your applied</TableCaption>
        <TableHeader className="border-b">
          <TableHead>Data</TableHead>
          <TableHead>Job Role</TableHead>
          <TableHead>Company</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4].map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>17-07-2024</TableCell>
              <TableCell>Frontend Developer</TableCell>
              <TableCell className="flex gap-2 items-center">
                <Avatar className="cursor-pointer h-6 w-6">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@maxleiter"
                  />
                </Avatar>
                Google
              </TableCell>
              <TableCell className="text-right">
                <Badge>Selected</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;

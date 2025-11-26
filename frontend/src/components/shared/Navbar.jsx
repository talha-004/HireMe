import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white px-4 font-inter">
      <div className="flex items-center justify-between mx-auto max-w-7xl  h-16 ">
        <Link to="/">
          <h1 className="text-2xl font-bold">
            <span className="text-[#f83002]">Hire</span> Me
          </h1>
        </Link>
        <div className="flex items-center gap-5">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-orange-600"
                    : "hover:border-b-2 hover:border-slate-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-orange-600"
                    : "hover:border-b-2 hover:border-slate-300"
                }
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browse"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-orange-600"
                    : "hover:border-b-2 hover:border-slate-300"
                }
              >
                Browse
              </NavLink>
            </li>
          </ul>
          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@maxleiter"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent
                side="bottom"
                align="end"
                className=" outline-0 shadow-2xl shadow-slate-200 p-2 not-[]:w-fit border-2 border-slate-200 rounded-lg gap-2 flex flex-col mt-2"
              >
                <div className="flex gap-4 items-start justify-center bg-slate-100 p-4 rounded-lg">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@maxleiter"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Talha Dev</h4>
                    <p className="text-sm text-muted-foreground">
                      asdfa aldfj hadfkj alf
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex  items-center pl-4">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex  items-center pl-4">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-slate-800 hover:bg-slate-900">
                  Signup
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

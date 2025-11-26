import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const user = false;
  const { user } = useSelector((store) => store.auth);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white px-4 ">
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
            <Popover open={open} onOpenChange={setOpen}>
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
                className=" outline-0 shadow-2xl shadow-slate-200 bg-white p-2 not-[]:w-fit border-2 border-slate-200 rounded-lg gap-2 flex flex-col mt-2"
              >
                <Link to="/profile">
                  <div
                    onClick={() => setOpen(false)}
                    className="flex gap-4 items-center justify-center bg-slate-100 p-4 rounded-lg"
                  >
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@maxleiter"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">
                        {user.fullName.length > 16
                          ? user.fullName.slice(0, 16).concat("...")
                          : user.fullName}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {user.profile.bio.length > 20
                          ? user.profile.bio.slice(0, 20).concat("...")
                          : user.profile.bio}
                      </p>
                    </div>
                    <ExternalLink size="18" className="text-slate-300" />
                  </div>
                </Link>
                <div className="flex flex-col gap-2">
                  {/* <Link to="/profile">
                    <div className=" group flex  items-center pl-4 hover:bg-slate-100 cursor-pointer rounded-lg">
                      <User2 />
                      <Button className=" group-hover:bg-slate-100 hover:bg-slate-100 transition-none cursor-pointer bg-white text-black">
                        View Profile
                      </Button>
                    </div>
                  </Link> */}

                  <Link to="/logout">
                    <div className=" group flex  items-center pl-4 hover:bg-slate-100 cursor-pointer rounded-lg">
                      <LogOut />
                      <Button className=" group-hover:bg-slate-100 hover:bg-slate-100 transition-none cursor-pointer bg-white text-black">
                        Logout
                      </Button>
                    </div>
                  </Link>
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

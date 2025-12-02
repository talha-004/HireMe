import { Avatar, AvatarImage } from "@/components/ui/avatar";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { ClipboardCheckIcon, Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialogue from "./UpdateProfileDialogue";
import { useSelector } from "react-redux";
const skills = ["html", "css", "javascript", "reactjs"];
const isHaveResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <section className="px-4">
      <div className="max-w-5xl mx-auto border border-slate-200  rounded-2xl my-5 p-8 flex flex-col gap-6">
        {/* profile */}
        <div className="flex justify-between gap-4 lg:gap-64">
          <div className="flex items-start md:items-center gap-4">
            <Avatar className="cursor-pointer h-24 w-24 rounded-2xl">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@maxleiter"
              />
            </Avatar>
            <div>
              <h1 className="font-semibold text-3xl font-stack mb-1">
                {user?.fullName}
              </h1>
              <p className="text-gray-700 font-medium">
                {user?.profile?.bio ? (
                  user?.profile?.bio
                ) : (
                  <i className="text-slate-500">
                    No bio yet — press Edit to add one.
                  </i>
                )}
              </p>
            </div>
          </div>
          <Button
            varient="outline"
            className="cursor-pointer hover:bg-slate-600"
            onClick={() => setOpen(true)}
          >
            <Pen />
          </Button>
        </div>
        {/* contact */}
        <div className="border px-7 rounded-2xl flex gap-4 py-4 flex-wrap">
          <div className="flex items-center gap-3 my-2">
            <Mail size="20" className="text-slate-600" />
            <span className="font-medium">{user?.email}</span>
          </div>
          <span className=" sm:border-l w-full sm:w-fit border-t border-gray-300 "></span>
          <div className="flex items-center gap-3 my-2">
            <Contact size="20" className="text-slate-600" />
            <span className="font-medium">{user?.phoneNumber}</span>
          </div>
        </div>
        {/* skills */}
        <div className="flex gap-4">
          <h1 className="font-semibold">Skills:</h1>
          {user?.profile.skills.length !== 0 ? (
            <div className="flex gap-3 flex-wrap">
              {user?.profile.skills.map((item, idx) => (
                <Badge
                  key={idx}
                  className="text-sm text-black px-3 bg-gray-200 rounded-sm"
                >
                  {item}
                </Badge>
              ))}
            </div>
          ) : (
            <span>No Skills</span>
          )}
        </div>

        {/* resume */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-medium">Resume</Label>
          {isHaveResume ? (
            <a
              target="_blank"
              href={user?.profile?.resume}
              className="text-blue-400 hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>No resume found</span>
          )}
        </div>
      </div>
      {/* apply jobs table */}
      <div className="rounded-2xl max-w-5xl mx-auto bg-white mt-7">
        <h1 className="font-medium text-xl flex gap-2 items-center">
          <ClipboardCheckIcon /> Applied Jobs
        </h1>
        <AppliedJobTable />
      </div>

      <UpdateProfileDialogue open={open} setOpen={setOpen} />
    </section>
  );
};

export default Profile;

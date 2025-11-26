import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const UpdateProfileDialogue = ({ open, setOpen }) => {
  const displatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullName: user?.fullName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills,
    file: user?.profile?.resume,
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.targer.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        displatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }

    setOpen(false);
  };
  return (
    <>
      <Dialog open={open}>
        <DialogContent onInteractOutside={() => setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={submitHandler}
            className="border-t-2 border-slate-200 py-4 flex flex-col gap-4"
          >
            {/* name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                onChange={changeEventHandler}
                id="name"
                name="fullName"
                type="text"
                value={input.fullName}
              />
            </div>
            {/* email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                onChange={changeEventHandler}
                type="email"
                id="email"
                name="email"
                value={input.email}
              />
            </div>

            {/* phoneNumber */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-right">
                Phone Number
              </Label>
              <Input
                onChange={changeEventHandler}
                id="phoneNumber"
                name="phoneNumber"
                value={input.phoneNumber}
              />
            </div>

            {/* bio */}
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-right">
                Bio
              </Label>
              <Input
                onChange={changeEventHandler}
                id="bio"
                name="bio"
                value={input.bio}
              />
            </div>

            {/* sKILLS */}
            <div className="space-y-2">
              <Label htmlFor="skills" className="text-right">
                Skills
              </Label>
              <Input
                onChange={changeEventHandler}
                id="skills"
                name="skills"
                value={input.skills}
              />
            </div>

            {/* resume */}
            <div className="space-y-2">
              <Label htmlFor="file" className="text-right">
                file
              </Label>
              <Input
                onChange={fileChangeHandler}
                id="file"
                name="file"
                type="file"
                accept="application/pdf"
                value={input.resume}
              />
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
                </Button>
              ) : (
                <Button className="w-full my-4" type="submit">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateProfileDialogue;

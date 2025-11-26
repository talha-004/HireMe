import React, { use, useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "student",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    console.log(formData);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        withCredentials: true,
      });

      if (res.data.success) {
        console.log(res);
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex items-center justify-center  w-full max-w-2xl mx-auto px-4">
      <form
        onSubmit={submitHandler}
        className="w-full border border-slate-200 rounded-lg p-10 mt-10 font-medium"
      >
        <h1 className="font-bold text-xl mb-5">Sign Up</h1>
        <div className="my-4">
          <Label>Full Name</Label>
          <Input
            type="text"
            placeholder="John Doe"
            value={input.fullName}
            name="fullName"
            onChange={changeEventHandler}
            className="placeholder:text-slate-400 font-normal "
          />
        </div>

        <div className="my-4">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="talha@gmail.com"
            value={input.email}
            name="email"
            onChange={changeEventHandler}
            className="placeholder:text-slate-400 font-normal "
          />
        </div>

        <div className="my-4">
          <Label>Phone Number</Label>
          <Input
            type="number"
            placeholder="9876543210"
            value={input.phoneNumber}
            name="phoneNumber"
            onChange={changeEventHandler}
            className="placeholder:text-slate-400 font-normal "
          />
        </div>

        <div className="my-4">
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="enter password"
            value={input.password}
            name="password"
            autocomplete="current-password"
            onChange={changeEventHandler}
            className="placeholder:text-slate-400 font-normal "
          />
        </div>

        <div className="flex item-center justify-between">
          <RadioGroup
            defaultValue="option-one"
            className="flex items-center gap-4 my-5"
          >
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
                className="placeholder:text-slate-400 font-normal "
                className="cursor-pointer"
                defaultChecked
              />
              <Label htmlFor="option-one">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
                className="placeholder:text-slate-400 font-normal "
                className="cursor-pointer"
              />
              <Label htmlFor="option-two">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center gap-2 text-nowrap w-full max-w-92">
          <Label>Profile Image</Label>
          <Input
            accept="image/*"
            type="file"
            name="file"
            className="cursor-pointer"
            onChange={changeFileHandler}
          />
        </div>
        {loading ? (
          <Button className="w-full my-4">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
          </Button>
        ) : (
          <Button className="w-full my-4" type="submit">
            Signup
          </Button>
        )}

        <div className="text-sm w-full text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;

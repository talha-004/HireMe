import React, { useState } from "react";
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

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "student",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));

      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        header: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        console.log(res);
        navigate("/");
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
        <h1 className="font-bold text-xl mb-5">Login</h1>
        <div className="my-4">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="talha@gmail.com"
            value={input.email}
            name="email"
            onChange={changeEventHandler}
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
                className="cursor-pointer"
                defaultChecked
              />
              <Label htmlFor="option-two">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        {loading ? (
          <Button className="w-full my-4">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
          </Button>
        ) : (
          <Button className="w-full my-4" type="submit">
            Login
          </Button>
        )}

        <div className="text-sm w-full text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

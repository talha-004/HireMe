import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        const companyId = res?.data?.company?._id;
        dispatch(setSingleCompany(res?.data?.company));
        navigate(`/r/companies/${companyId}`);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response);
    }
  };
  return (
    <div className="max-w-4xl mx-auto">
      <div className="my-10">
        <h1 className="font-bold text-2xl">Set Your Company Name</h1>
        <p className="text-gray-500">
          This will appear across your account. You can edit it whenever you
          like.
        </p>
      </div>

      <Label>Company Name</Label>
      <Input
        type="text"
        className="my-2"
        placeholder="HireMe, Microsoft etc."
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <div className="flex items-center gap-2 my-10">
        <Button variant="outline" onClick={() => navigate("/r/companies")}>
          Cancel
        </Button>
        <Button onClick={registerNewCompany}>Continue</Button>
      </div>
    </div>
  );
};

export default CompanyCreate;

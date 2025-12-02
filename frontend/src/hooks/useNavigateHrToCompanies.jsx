import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useNavigateHrToCompanies = () => {
  const navigate = useNavigate();

  const { user } = useSelector((store) => store.auth);
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/r/companies");
    }
  }, []);
};

export default useNavigateHrToCompanies;

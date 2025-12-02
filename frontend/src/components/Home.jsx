import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import useNavigateHrToCompanies from "@/hooks/useNavigateHrToCompanies";

const Home = () => {
  useGetAllJobs();
  useNavigateHrToCompanies();
  return (
    <>
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
    </>
  );
};

export default Home;

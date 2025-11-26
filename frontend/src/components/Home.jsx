import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
    </>
  );
};

export default Home;

import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center text-slate-800   flex flex-col items-center justify-center gap-10 py-20 px-4">
      <span className="w-fit px-4 py-1 rounded-full bg-slate-100 text-[#f83002] font-semibold">
        No. 1 Job Hunt Website
      </span>
      <div className="flex flex-col gap-2">
        <h1 className=" text-4xl md:text-5xl font-bold leading-tight font-stack">
          Find the Perfect <span className="text-[#f83002]">Job</span> for You
          <br />
          Stop Searching.{" "}
          <span className="text-[#f83002]"> Start Working.</span>
        </h1>
        <p>
          Stop wasting time on endless searches—get closer to the job you
          actually want.
        </p>
      </div>
      <div className=" w-full max-w-sm flex items-center justify-center">
        <input
          type="text"
          placeholder="Find your dream jobs"
          className="w-full outline-none border-2 px-5 py-4 rounded-xl border-slate-250 shadow-2xl shadow-orange-100 font-medium focus:border-[#f83002]"
        />
        <Button className="h-10 w-10 rounded-lg bg-slate-800 hover:bg-slate-900 -ml-12 cursor-pointer">
          <Search className="h-10 w-10" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Cybersecurity Specialist",
  "Frontend Developer",
  "Mobile App Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "UI/UX Designer",
  "Data Scientist",
  "Backend Developer",
  "Machine Learning Engineer",
  "Cloud Engineer",
];
const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {category.map((ele, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/4">
              <Button
                variant="outline"
                className="w-full border-slate-200 rounded-lg"
              >
                {ele}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;

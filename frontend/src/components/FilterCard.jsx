import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import { Settings2 } from "lucide-react";
const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className=" w-full p-3">
      <h1 className="font-semibold text-lg flex gap-2 items-center">
        <Settings2 size="22" /> Filter Jobs
      </h1>
      <hr className="my-3" />
      <RadioGroup>
        {filterData.map((data, idx) => (
          <div>
            <h1 className="font-semibold">{data.filterType}</h1>
            {data.array.map((item) => (
              <div className="flex items-center space-x-2 my-2">
                <RadioGroupItem value={item} />
                <Label>{item}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;

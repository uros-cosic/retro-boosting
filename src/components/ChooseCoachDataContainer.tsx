import React, { useContext } from "react";
import {
  CoachingOrderDataContent,
  CoachingOrderDataContext,
} from "@/lib/CoachingDataContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function ChooseCoachDataContainer() {
  const { coachingHours, language, role, server, coach, setCoachingOrderData } =
    useContext<CoachingOrderDataContent>(CoachingOrderDataContext);

  const handleChange = () => {};

  return (
    <div className="px-10 py-5 bg-black rounded-xl h-full flex items-center justify-between border border-primary">
      <div className="h-full w-full flex items-center justify-start lg:justify-center flex-col space-y-3">
        <h2 className="font-bold uppercase text-xl">coach</h2>
        <Avatar className="h-1/2 w-fit">
          <AvatarImage
            src={coach.avatar}
            className={`${coach.name === "any" ? "bg-white" : ""}`}
          />
          <AvatarFallback>{coach.name}</AvatarFallback>
        </Avatar>
        <h3 className="font-bold uppercase">{coach.name}</h3>
      </div>
      <div className="flex flex-col items-center justify-center text-center w-full space-y-5">
        <div className="flex flex-col items-center space-y-5">
          <h2 className="font-bold capitalize text-xl">hours of coaching</h2>
          <Input
            className="w-40 font-black border border-primary"
            type="number"
            value={coachingHours}
            onChange={(e) =>
              setCoachingOrderData((prev: any) => {
                return {
                  ...prev,
                  coachingHours: e.target.value,
                };
              })
            }
            min={1}
            max={99}
          />
        </div>
        <div className="flex flex-col items-center space-y-5">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="font-bold capitalize text-xl bg-primary hover:bg-primary/90">
                choose your coach
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-black border-primary border text-white">
              123
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default ChooseCoachDataContainer;

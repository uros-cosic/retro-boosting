import React, {
  ChangeEvent,
  ChangeEventHandler,
  ReactElement,
  useContext,
  useState,
} from "react";
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
import { FaSearch } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "./ui/dialog";

function ChooseCoachDataContainer() {
  const { coachingOrderData, setCoachingOrderData } =
    useContext<CoachingOrderDataContent>(CoachingOrderDataContext);
  // TEMP COACH DATA - fetch from api

  const coachesContent = [
    {
      avatar: "/img/temp/coaches/lexa.png",
      name: "lexa",
      link: "/coaches/lexa",
    },
    {
      avatar: "/img/temp/coaches/ASCO.jpg",
      name: "ASCO",
      link: "/coaches/asco",
    },
    {
      avatar: "/img/temp/coaches/ASCO.jpg",
      name: "123",
      link: "/coaches/asco",
    },
    {
      avatar: "/img/temp/coaches/ASCO.jpg",
      name: "321",
      link: "/coaches/asco",
    },
    {
      avatar: "/img/temp/coaches/ASCO.jpg",
      name: "444",
      link: "/coaches/asco",
    },
    {
      avatar: "/img/temp/coaches/ASCO.jpg",
      name: "qqq",
      link: "/coaches/asco",
    },
    {
      avatar: "/img/temp/coaches/ASCO.jpg",
      name: "www",
      link: "/coaches/asco",
    },
  ];
  const [coaches, setCoaches] = useState(coachesContent);
  const [searchVal, setSearchVal] = useState("");

  const handleChange = () => {};

  const handleCoachChange = (coachObj: any) => {
    setSearchVal("");
    setCoaches(coachesContent);
    setCoachingOrderData((prev: any) => {
      return {
        ...prev,
        coach: coachObj,
      };
    });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
    if (!val.trim()) {
      setCoaches(coachesContent);
      return;
    }
    setCoaches(
      coachesContent.filter((coachObj) =>
        coachObj.name.toLowerCase().startsWith(val.toLowerCase())
      )
    );
  };

  const handleCoachingHoursChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let val: any = e.target.value;
    if (val.length > 2) return;
    if (!val || Number(val) <= 0) val = 1;
    setCoachingOrderData((prev: any) => {
      return {
        ...prev,
        coachingHours: val,
      };
    });
  };

  return (
    <div className="px-10 py-5 bg-black rounded-xl h-full flex items-center justify-between border border-primary">
      <div className="h-full w-full flex items-center justify-start lg:justify-center flex-col space-y-3">
        <h2 className="font-bold uppercase text-xl">coach</h2>
        <Avatar className="h-1/2 w-fit">
          <AvatarImage
            src={coachingOrderData.coach.avatar}
            className={`${
              coachingOrderData.coach.name === "any" ? "bg-white" : ""
            }`}
          />
          <AvatarFallback>{coachingOrderData.coach.name}</AvatarFallback>
        </Avatar>
        <h3 className="font-bold uppercase">{coachingOrderData.coach.name}</h3>
      </div>
      <div className="flex flex-col items-center justify-center text-center w-full space-y-5">
        <div className="flex flex-col items-center space-y-5">
          <h2 className="font-bold capitalize text-xl">hours of coaching</h2>
          <Input
            className="w-40 font-black border border-primary"
            type="number"
            value={coachingOrderData.coachingHours}
            onChange={handleCoachingHoursChange}
            min={1}
            max={99}
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="font-bold capitalize text-xl bg-primary hover:bg-primary/90">
              choose your coach
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-black border-primary border text-white">
            <div className="border-primary border-b relative">
              <Input
                className="border-none focus-visible:ring-0"
                placeholder="Search..."
                value={searchVal}
                onChange={handleSearchChange}
              />
              <Button className="absolute top-1/3 left-full text-primary transform -translate-x-full p-0 m-0 border-none outline-none h-fit">
                <FaSearch className="text-lg" />
              </Button>
            </div>
            <div className="w-full overflow-y-scroll max-h-52 my-2 space-y-3">
              {coaches.map((coachObj) => (
                <div
                  key={coachObj.name}
                  className="h-14 w-full flex items-center justify-between pr-1"
                >
                  <Avatar className="h-full w-auto">
                    <AvatarImage
                      src={coachObj.avatar}
                      className="h-full w-auto"
                    />
                    <AvatarFallback>{coachObj.name}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex space-x-1">
                      <Badge
                        variant={"outline"}
                        className="text-white bg-primary uppercase font-bold px-1 text-[9px]"
                      >
                        challenger
                      </Badge>
                      <Badge
                        variant={"outline"}
                        className="text-white bg-primary uppercase font-bold px-1 text-[9px]"
                      >
                        any role
                      </Badge>
                    </div>
                    <p>{coachObj.name}</p>
                  </div>
                  <DialogClose asChild>
                    <Button
                      className="bg-primary text-white text-xs uppercase hover:bg-primary/90"
                      onClick={() => {
                        handleCoachChange(coachObj);
                      }}
                    >
                      choose
                    </Button>
                  </DialogClose>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default ChooseCoachDataContainer;

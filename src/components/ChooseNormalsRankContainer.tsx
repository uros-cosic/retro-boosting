import React, { useContext, useState } from "react";
import Image from "next/image";
import {
  NormalsOrderDataContent,
  NormalsOrderDataContext,
} from "@/lib/NormalsDataContext";
import { tierMapping, divisionsOrdered } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";

function ChooseNormalsRankContainer() {
  const { normalsOrderData, setNormalsOrderData } =
    useContext<NormalsOrderDataContent>(NormalsOrderDataContext);

  const [numberVal, setNumberVal] = useState(normalsOrderData.numOfGames);

  const handleChange = (val: string) => {
    setNormalsOrderData((prev: any) => {
      return { ...prev, boosterRank: val };
    });
  };

  const handleNumOfGamesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val: any = e.target.value;
    if (val && Number(val) <= 0) {
      val = 1;
    } else if (val && Number(val) > 99) {
      val = 99;
    }

    setNumberVal(val);

    if (val) {
      setNormalsOrderData((prev: any) => {
        return {
          ...prev,
          numOfGames: val,
        };
      });
    }
  };

  return (
    <div className="px-5 lg:px-10 py-5 bg-dark rounded-xl h-full flex items-center justify-between border border-primary space-x-3 shadow-base shadow-primary">
      <div className="h-full w-full flex items-center justify-start lg:justify-center">
        <Image
          src={tierMapping[normalsOrderData.boosterRank].href}
          alt={tierMapping[normalsOrderData.boosterRank].label}
          height={150}
          width={150}
          className="h-28 lg:h-36 w-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center w-full space-y-5">
        <h2 className="font-normal   text-2xl">booster rank</h2>
        <div>
          <Select onValueChange={(val) => handleChange(val)}>
            <SelectTrigger className="w-40 border border-primary">
              <SelectValue
                className=" "
                placeholder={tierMapping[normalsOrderData.boosterRank].label}
              />
            </SelectTrigger>
            <SelectContent className="border border-primary">
              {divisionsOrdered.map((key: string) => (
                <SelectItem key={tierMapping[key].label} value={key}>
                  {tierMapping[key].label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <h2 className="font-normal   text-sm lg:text-xl">number of games</h2>
          <Input
            className="w-40 border border-primary"
            type="number"
            value={numberVal}
            onChange={handleNumOfGamesChange}
            min={1}
            max={99}
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseNormalsRankContainer;

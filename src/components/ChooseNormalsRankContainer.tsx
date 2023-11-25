import React, { useContext } from "react";
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

  const handleChange = (val: string) => {
    setNormalsOrderData((prev: any) => {
      return { ...prev, boosterRank: val };
    });
  };

  const handleNumOfGamesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val: any = e.target.value;
    if (val.length > 2) return;
    if (!val || Number(val) <= 0) val = 1;
    setNormalsOrderData((prev: any) => {
      return {
        ...prev,
        numOfGames: val,
      };
    });
  };

  return (
    <div className="px-10 py-5 bg-black rounded-xl h-full flex items-center justify-between border border-primary">
      <div className="h-full w-full flex items-center justify-start lg:justify-center">
        <Image
          src={tierMapping[normalsOrderData.boosterRank].href}
          alt={tierMapping[normalsOrderData.boosterRank].label}
          height={250}
          width={250}
          className="h-auto w-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center w-full space-y-5">
        <h2 className="font-bold capitalize text-2xl">booster rank</h2>
        <div>
          <Select onValueChange={(val) => handleChange(val)}>
            <SelectTrigger className="w-40 font-black border border-primary">
              <SelectValue
                className="uppercase"
                placeholder={tierMapping[
                  normalsOrderData.boosterRank
                ].label.toUpperCase()}
              />
            </SelectTrigger>
            <SelectContent className="border border-primary">
              {divisionsOrdered.map((key: string) => (
                <SelectItem key={tierMapping[key].label} value={key}>
                  {tierMapping[key].label.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <h2 className="font-bold capitalize text-sm lg:text-xl">
            number of games
          </h2>
          <Input
            className="w-40 font-black border border-primary"
            type="number"
            value={normalsOrderData.numOfGames}
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
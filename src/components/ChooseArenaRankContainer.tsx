import React, { useContext, useState } from "react";
import Image from "next/image";
import {
  ArenaOrderDataContent,
  ArenaOrderDataContext,
} from "@/lib/ArenaDataContext";
import { arenaDivisionsOrdered, arenaTierMapping } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";

function ChooseArenaRankContainer() {
  const { arenaOrderData, setArenaOrderData } =
    useContext<ArenaOrderDataContent>(ArenaOrderDataContext);

  const [numberVal, setNumberVal] = useState(arenaOrderData.numOfGames);

  const handleChange = (val: string) => {
    setArenaOrderData((prev: any) => {
      return { ...prev, currentRank: val };
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
      setArenaOrderData((prev: any) => {
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
          src={arenaTierMapping[arenaOrderData.currentRank].href}
          alt={arenaTierMapping[arenaOrderData.currentRank].label}
          height={150}
          width={150}
          className="h-28 lg:h-36 w-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center w-full space-y-5">
        <h2 className="font-normal   text-2xl">current rank</h2>
        <div>
          <Select onValueChange={(val) => handleChange(val)}>
            <SelectTrigger className="w-40 border border-primary">
              <SelectValue
                className=" "
                placeholder={arenaTierMapping[arenaOrderData.currentRank].label}
              />
            </SelectTrigger>
            <SelectContent className="border border-primary">
              {arenaDivisionsOrdered.map((key: string) => (
                <SelectItem key={arenaTierMapping[key].label} value={key}>
                  {arenaTierMapping[key].label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <h2 className="font-normal   text-xl">number of games</h2>
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

export default ChooseArenaRankContainer;

import React, { useContext } from "react";
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
  const { currentRank, numOfGames, setArenaOrderData } =
    useContext<ArenaOrderDataContent>(ArenaOrderDataContext);

  const handleChange = (val: string) => {
    setArenaOrderData((prev: any) => {
      return { ...prev, currentRank: val };
    });
  };

  const handleNumOfGamesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val: any = e.target.value;
    if (val.length > 2) return;
    if (!val || Number(val) <= 0) val = 1;
    setArenaOrderData((prev: any) => {
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
          src={arenaTierMapping[currentRank].href}
          alt={arenaTierMapping[currentRank].label}
          height={250}
          width={250}
          className="h-auto w-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center w-full space-y-5">
        <h2 className="font-bold capitalize text-2xl">current rank</h2>
        <div>
          <Select onValueChange={(val) => handleChange(val)}>
            <SelectTrigger className="w-40 font-black border border-primary">
              <SelectValue
                className="uppercase"
                placeholder={arenaTierMapping[currentRank].label.toUpperCase()}
              />
            </SelectTrigger>
            <SelectContent className="border border-primary">
              {arenaDivisionsOrdered.map((key: string) => (
                <SelectItem key={arenaTierMapping[key].label} value={key}>
                  {arenaTierMapping[key].label.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <h2 className="font-bold capitalize text-xl">number of games</h2>
          <Input
            className="w-40 font-black border border-primary"
            type="number"
            value={numOfGames}
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

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
  const { setArenaOrderData } = useContext<ArenaOrderDataContent>(
    ArenaOrderDataContext
  );
  const { desiredRank, numOfGames } = useContext<ArenaOrderDataContent>(
    ArenaOrderDataContext
  );

  const handleChange = (val: string) => {
    setArenaOrderData((prev: any) => {
      return { ...prev, desiredRank: val };
    });
  };

  return (
    <div className="px-10 py-5 bg-black rounded-xl h-full flex items-center justify-between border border-primary">
      <Image
        src={arenaTierMapping[desiredRank].href}
        alt={arenaTierMapping[desiredRank].label}
        height={150}
        width={150}
        className="h-2/3 w-auto"
      />
      <div className="flex flex-col items-center justify-center text-center w-full space-y-5">
        <h2 className="font-bold capitalize text-2xl">desired rank</h2>
        <div>
          <Select onValueChange={(val) => handleChange(val)}>
            <SelectTrigger className="w-40 font-black border border-primary">
              <SelectValue
                className="uppercase"
                placeholder={arenaTierMapping[desiredRank].label.toUpperCase()}
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
        <div>
          <Input
            className="w-40 font-black border border-primary"
            type="number"
            value={numOfGames}
            onChange={(e) =>
              setArenaOrderData((prev: any) => {
                return {
                  ...prev,
                  numOfGames: e.target.value,
                };
              })
            }
            min={1}
            max={99}
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseArenaRankContainer;

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

function TeamCard({ data }: { data: any }) {
  return (
    <Link
      href={data.link}
      className="bg-dark rounded-xl border border-primary h-96 p-5 shadow-base shadow-primary flex flex-col items-center justify-between relative hover:opacity-80 transition-opacity"
    >
      <div className="absolute top-0 left-0 p-5 flex space-x-1 items-center">
        <FaStar className="text-lg" />
        <p className="text-lg">{data.rating}</p>
      </div>
      <Avatar className="h-20 w-auto border">
        <AvatarImage src={data.avatar} className="h-full w-auto" />
        <AvatarFallback className="text-light">{data.name}</AvatarFallback>
      </Avatar>
      <p className="text-lg">{data.name}</p>
      <p
        className={twMerge(
          clsx("  text-xs text-primary font-black", {
            "text-yellow-500": data.elo === "challenger",
            "text-red-500": data.elo === "grandmaster",
            "text-purple-500": data.elo === "master",
          })
        )}
      >
        {data.elo}
      </p>
      <div className="flex space-x-2  ">
        {data.roles.length === 5 ? (
          <Badge
            variant={"outline"}
            className="bg-light text-dark py-0 px-2 w-fit font-black"
          >
            any
          </Badge>
        ) : (
          data.roles.map((role: string, idx: number) => (
            <Badge
              key={idx}
              variant={"outline"}
              className="bg-light text-dark py-0 px-2 w-fit font-black"
            >
              {role}
            </Badge>
          ))
        )}
      </div>
      <Image
        src={`/img/tiers/${
          data.type[0] === "arena booster"
            ? `arena/${data.elo}.svg`
            : `${data.elo}.svg`
        }`}
        alt="elo"
        className="h-20 w-auto"
        height={100}
        width={100}
      />
      <div className="flex space-x-2  ">
        {data.type.map((type: string, idx: number) => (
          <Badge
            key={idx}
            variant={"outline"}
            className="bg-light text-dark py-0 px-2 w-fit font-black"
          >
            {type}
          </Badge>
        ))}
      </div>
    </Link>
  );
}

export default TeamCard;

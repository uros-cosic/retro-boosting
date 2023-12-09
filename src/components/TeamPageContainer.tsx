"use client";
import { TeamDataContext } from "@/lib/TeamContext";
import React, { useEffect, useState } from "react";
import TeamMenuLeft from "./TeamMenuLeft";
import TeamCard from "./TeamCard";
import {
  FaAngleLeft,
  FaAnglesLeft,
  FaAngleRight,
  FaAnglesRight,
} from "react-icons/fa6";
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { Skeleton } from "./ui/skeleton";
import { getTeam } from "@/lib/apiUtils";
import { useSearchParams } from "next/navigation";

function TeamPageContainer({
  data,
}: {
  data: {
    team: Array<any>;
    pages: number;
  };
}) {
  const searchParams = useSearchParams();
  const [teamData, setTeamData] = useState(data);
  const [showPages, setShowPages] = useState(
    [...Array(Math.min(data.pages, 5))].map((_, idx) => idx + 1)
  );
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [options, setOptions] = useState({
    searchVal: "",
    boosterChecked: searchParams.get("booster") ? true : false,
    coachChecked: searchParams.get("coach") ? true : false,
    server: "any",
    language: "any",
  });

  const handleChange = async () => {
    const data: any = await getTeam();
    setTeamData(data.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    handleChange();
  }, [page, options]);

  return (
    <div className="max-w-7xl mx-auto text-light flex justify-between px-1 lg:px-0">
      <TeamDataContext.Provider
        value={{
          data: teamData,
          setData: setTeamData,
        }}
      >
        <TeamMenuLeft options={options} setOptions={setOptions} />
        <div className="h-full w-full space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {loading
              ? [...Array(6)].map((_, idx) => (
                  <Skeleton key={idx} className="h-96 bg-muted-foreground" />
                ))
              : teamData.team.map((teamMemberObj, idx) => (
                  <TeamCard
                    key={teamMemberObj._id + `-${idx}`}
                    data={teamMemberObj}
                  />
                ))}
          </div>
          {data.pages > 1 && (
            <div className="flex items-center w-full text-center justify-center text-xl space-x-2">
              <Button
                className="bg-transparent shadow-none outline-none text-xl p-0 m-0 hover:text-light/80 hover:bg-transparent"
                onClick={() => {
                  setPage(1);
                  setShowPages(
                    [...Array(Math.min(data.pages, 5))].map((_, idx) => idx + 1)
                  );
                }}
              >
                <FaAnglesLeft />
              </Button>
              <Button
                className="bg-transparent shadow-none outline-none text-xl p-0 m-0 hover:text-light/80 hover:bg-transparent"
                onClick={() => setPage(Math.max(1, page - 1))}
              >
                <FaAngleLeft />
              </Button>
              <div className="flex space-x-2">
                {showPages.map((num, idx) => (
                  <Button
                    key={idx}
                    className={twMerge(
                      clsx(
                        "bg-transparent shadow-none outline-none text-xl p-0 m-0 hover:text-light/80 hover:bg-transparent",
                        {
                          "text-gray-400": num === page,
                        }
                      )
                    )}
                    onClick={() => setPage(num)}
                  >
                    {num}
                  </Button>
                ))}
              </div>
              <Button
                className="bg-transparent shadow-none outline-none text-xl p-0 m-0 hover:text-light/80 hover:bg-transparent"
                onClick={() => setPage(Math.min(data.pages, page + 1))}
              >
                <FaAngleRight />
              </Button>
              <Button
                className="bg-transparent shadow-none outline-none text-xl p-0 m-0 hover:text-light/80 hover:bg-transparent"
                onClick={() => {
                  setPage(data.pages);
                  setShowPages(
                    [...Array(Math.min(data.pages, 5))]
                      .map((_, idx) => data.pages - idx)
                      .reverse()
                  );
                }}
              >
                <FaAnglesRight />
              </Button>
            </div>
          )}
        </div>
      </TeamDataContext.Provider>
    </div>
  );
}

export default TeamPageContainer;

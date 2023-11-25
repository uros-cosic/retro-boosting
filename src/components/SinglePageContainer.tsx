"use client";
import { ReviewCardInterface } from "@/lib/apiUtils";
import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Image from "next/image";
import { tierMapping } from "@/lib/utils";
import { nameify } from "@/lib/utils";
import { FaGreaterThan } from "react-icons/fa";

function SinglePageContainer({
  data,
  reviews,
  type,
}: {
  data: any;
  reviews: Array<ReviewCardInterface>;
  type: string;
}) {
  const stars = data.rating ? [...Array(Math.ceil(data.rating))] : [];

  return (
    <div className="flex flex-col space-y-10 max-w-7xl mx-auto px-1">
      <div className="flex items-center justify-between">
        <div className="flex space-x-3 lg:space-x-5 items-center h-28">
          <Avatar className="h-full w-fit">
            <AvatarImage src={data.avatar} />
            <AvatarFallback className="text-white">{data.name}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center space-y-3 h-full">
            <Badge
              variant={"outline"}
              className="text-white bg-primary uppercase font-bold text-[9px]"
            >
              {data.elo}
            </Badge>
            <h2 className="text-white text-2xl font-black">{data.name}</h2>
          </div>
        </div>
        {data.rating && (
          <div className="flex space-x-2 text-white">
            <p className="font-bold text-3xl">{data.rating}</p>
            <div className="flex flex-col space-y-1 text-center">
              <div className="flex space-x-1 items-center text-lg">
                {stars.length &&
                  stars.map((_, idx) => (
                    <div key={idx}>
                      {idx !== stars.length - 1 ? (
                        <FaStar className="text-white" />
                      ) : (data.rating && data.rating % 1) === 0 ? (
                        <FaStar className="text-white" />
                      ) : (
                        <FaStarHalf className="text-white" />
                      )}
                    </div>
                  ))}
              </div>
              {data.ratingsQuantity && (
                <p className="text-xs">{`(${data.ratingsQuantity} Reviews)`}</p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10 text-white">
        <div className="bg-black rounded-xl border-primary border w-full lg:w-2/3 p-5 space-y-5 flex flex-col items-center">
          <h1 className="font-black text-3xl">About</h1>
          <div className="h-full flex items-center">
            <p className="text-center">{data.about}</p>
          </div>
        </div>
        <div className="flex lg:flex-col h-full w-full space-x-1 lg:space-x-0 lg:w-1/3 lg:space-y-5">
          <div className="bg-black rounded-xl border-primary border w-full p-2 lg:p-5 text-center space-y-5">
            <h3 className="text-sm lg:text-2xl uppercase font-black">
              Orders Completed
            </h3>
            <p className="text-sm lg:text-xl font-bold">
              {data.ordersCompleted}
            </p>
          </div>
          <div className="bg-black rounded-xl border-primary border w-full p-2 lg:p-5 text-center space-y-5">
            <h3 className="text-sm lg:text-2xl uppercase font-black">
              {type === "booster" ? "Boosting Since" : "Coaching Since"}
            </h3>
            <p className="text-sm lg:text-xl font-bold">{data.boostingSince}</p>
          </div>
          <div className="bg-black rounded-xl border-primary border w-full p-2 lg:p-5 text-center space-y-5">
            <h3 className="text-sm lg:text-2xl uppercase font-black">Roles</h3>
            <div className="text-sm lg:text-xl font-bold space-x-3 w-full flex text-center items-center justify-center">
              {data.roles?.length === 5 ? (
                <p className="text-center">any</p>
              ) : (
                data.roles?.map((role: string, idx: number) => (
                  // TODO: Add Role Icon :)
                  <p key={idx} className="text-center">
                    {role}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {reviews.length && (
        <div className="w-full text-white space-y-10">
          <h1 className="font-black text-3xl">Read Reviews</h1>
          <div className="w-full pb-5 overflow-x-scroll flex space-x-5 max-w-7xl">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-primary bg-black p-1 sm:p-7 flex items-center justify-center"
              >
                <div className="w-[97vw] lg:w-[30rem] h-full space-y-7 flex flex-col items-center justify-center">
                  <div className="w-full flex items-center justify-between">
                    <div className="w-[40%] h-full flex items-center space-x-2 md:justify-between">
                      <Avatar className="md:h-20 w-auto">
                        <AvatarImage
                          src={review.customer.avatar}
                          className="bg-white h-full"
                        />
                        <AvatarFallback className="text-white">
                          {review.customer.name}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col h-full justify-around">
                        <div>
                          <p className="text-sm font-medium text-white uppercase">
                            {review.customer.name}
                          </p>
                          <p className="text-xs text-gray-500 font-medium">
                            {review.customer.tag}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          {stars.map((_, idx) => (
                            <div key={idx}>
                              {idx !== stars.length - 1 ? (
                                <FaStar className="text-white text-xs" />
                              ) : review.review.rating % 1 === 0 ? (
                                <FaStar className="text-white text-xs" />
                              ) : (
                                <FaStarHalf className="text-white text-xs" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between h-full items-center space-x-2">
                      <div className="h-16 sm:h-20 flex flex-col items-center justify-center">
                        <Image
                          src={tierMapping[review.order.from].href}
                          alt={tierMapping[review.order.from].label}
                          height={500}
                          width={500}
                          className="w-auto h-14 sm:h-16"
                        />
                        <p className="text-white uppercase text-center text-xs">
                          {tierMapping[review.order.from].label}
                        </p>
                      </div>
                      <FaGreaterThan className="text-white text-2xl" />
                      <div className="h-16 sm:h-20 flex flex-col items-center justify-center">
                        <Image
                          src={tierMapping[review.order.to].href}
                          alt={tierMapping[review.order.to].label}
                          height={500}
                          width={500}
                          className="w-auto h-14 sm:h-16"
                        />
                        <p className="text-white uppercase text-center text-xs">
                          {tierMapping[review.order.to].label}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-2/3 text-white space-y-2">
                    <h3 className="font-bold">{review.review.heading}</h3>
                    <p className="text-xs font-medium text-gray-500">
                      {nameify(review.review.comment, 200)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SinglePageContainer;

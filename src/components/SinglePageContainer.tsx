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
          <Avatar className="h-full w-fit border">
            <AvatarImage src={data.avatar} className="h-full w-auto" />
            <AvatarFallback className="text-white">{data.name}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center space-y-3 h-full">
            <Badge
              variant={"outline"}
              className="text-white bg-primary uppercase text-[10px] lg:text-xs text-center w-fit"
            >
              {data.elo}
            </Badge>
            <h2 className="text-white text-2xl">{data.name}</h2>
          </div>
        </div>
        {data.rating && (
          <div className="flex space-x-2 text-white">
            <p className="font-normal text-3xl">{data.rating}</p>
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
                <p className="text-xs">{`(${data.ratingsQuantity} ${
                  data.ratingsQuantity > 1 ? "Reviews" : "Review"
                })`}</p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10 text-white h-[50vh]">
        <div className="bg-black rounded-xl border-primary border w-full lg:w-2/3 flex flex-col items-center shadow-base shadow-primary relative overflow-hidden">
          <Image
            src={
              type === "booster"
                ? "/img/boosting-service.jpg"
                : "/img/coaching-service.jpg"
            }
            alt={`${type} cover image`}
            className="h-full w-full object-cover"
            height={900}
            width={1920}
          />
          <div className="h-full w-full absolute top-0 left-0 bg-primary/50" />
          <div className="absolute h-full w-full flex flex-col items-center justify-center p-5">
            <h1 className="font-bold text-3xl z-10 uppercase">About</h1>
            <div className="h-full flex items-center z-10">
              <p className="text-center text-xs lg:text-sm text-gray-300">
                {data.about}
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-col h-full w-full space-x-1 lg:space-x-0 lg:w-1/3 lg:space-y-5 justify-between">
          <div className="bg-black rounded-xl border-primary border w-full p-2 lg:p-5 text-center space-y-5 shadow-base shadow-primary flex flex-col items-center justify-center">
            <h3 className="text-sm lg:text-2xl uppercase font-bold">
              Orders Completed
            </h3>
            <p className="text-xs lg:text-xl">{data.ordersCompleted}</p>
          </div>
          <div className="bg-black rounded-xl border-primary border w-full p-2 lg:p-5 text-center space-y-5 shadow-base shadow-primary flex flex-col items-center justify-center">
            <h3 className="text-sm lg:text-2xl uppercase font-bold">
              {type === "booster" ? "Boosting Since" : "Coaching Since"}
            </h3>
            <p className="text-xs lg:text-xl">{data.boostingSince}</p>
          </div>
          <div className="bg-black rounded-xl border-primary border w-full p-2 lg:p-5 text-center space-y-5 shadow-base shadow-primary flex flex-col items-center justify-center">
            <h3 className="text-sm lg:text-2xl uppercase font-bold">Roles</h3>
            <div className="text-xs lg:text-xl space-x-0 lg:space-x-3 space-y-1 lg:space-y-0 w-full flex flex-col lg:flex-row text-center items-center justify-center">
              {data.roles?.length === 5 ? (
                <div className="flex items-center">
                  <Image
                    src="/img/lanes/any.svg"
                    alt="any"
                    height={50}
                    width={50}
                    className="max-h-5 max-w-5"
                  />
                  <p className="text-center">any</p>
                </div>
              ) : (
                data.roles?.map((role: string, idx: number) => (
                  <div key={idx} className="flex items-center">
                    <Image
                      src={`/img/lanes/${role}.svg`}
                      alt={role}
                      height={50}
                      width={50}
                      className="max-h-4 max-w-4"
                    />
                    <p className="text-center">{role}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {reviews.length && (
        <div className="w-full text-white space-y-10">
          <h1 className="font-bold text-3xl">Read Reviews</h1>
          <div className="w-full pb-5 overflow-x-auto flex space-x-5 max-w-7xl">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-primary bg-black p-1 sm:p-7 flex items-center justify-center shadow-base shadow-primary"
              >
                <div className="w-[85vw] lg:w-[30rem] h-full space-y-7 flex flex-col items-center justify-center">
                  <div className="w-full flex items-center justify-between">
                    <div className="w-[40%] h-full flex items-center space-x-2 md:justify-between">
                      <Avatar className="md:h-20 w-auto border">
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
                    <h3 className="font-normal">{review.review.heading}</h3>
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

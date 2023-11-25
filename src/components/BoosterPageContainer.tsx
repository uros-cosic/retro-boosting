"use client";
import { BoosterCardInterface, ReviewCardInterface } from "@/lib/apiUtils";
import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Review from "./Review";
import Image from "next/image";
import Link from "next/link";
import { tierMapping } from "@/lib/utils";
import { nameify } from "@/lib/utils";
import { FaGreaterThan } from "react-icons/fa";

function BoosterPageContainer({
  booster,
  reviews,
}: {
  booster: BoosterCardInterface;
  reviews: Array<ReviewCardInterface>;
}) {
  const stars = booster.rating ? [...Array(Math.ceil(booster.rating))] : [];

  return (
    <div className="flex flex-col space-y-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex space-x-5 items-center h-28">
          <Avatar className="h-full w-fit">
            <AvatarImage src={booster.avatar} />
            <AvatarFallback className="text-white">
              {booster.name}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center space-y-3 h-full">
            <Badge
              variant={"outline"}
              className="text-white bg-primary uppercase font-bold text-[9px]"
            >
              {booster.elo}
            </Badge>
            <h2 className="text-white text-2xl font-black">{booster.name}</h2>
          </div>
        </div>
        {booster.rating && (
          <div className="flex space-x-3 text-white">
            <p className="font-bold text-3xl">{booster.rating}</p>
            <div className="flex flex-col space-y-1 text-center">
              <div className="flex space-x-1 items-center text-lg">
                {stars.length &&
                  stars.map((_, idx) => (
                    <div key={idx}>
                      {idx !== stars.length - 1 ? (
                        <FaStar className="text-white" />
                      ) : (booster.rating && booster.rating % 1) === 0 ? (
                        <FaStar className="text-white" />
                      ) : (
                        <FaStarHalf className="text-white" />
                      )}
                    </div>
                  ))}
              </div>
              {booster.ratingsQuantity && (
                <p className="text-xs">{`(${booster.ratingsQuantity} Reviews)`}</p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10 text-white">
        <div className="bg-black rounded-xl border-primary border w-full lg:w-2/3 p-5 space-y-5 flex flex-col items-center">
          <h1 className="font-black text-3xl">About</h1>
          <div className="h-full flex items-center">
            <p className="text-center">{booster.about}</p>
          </div>
        </div>
        <div className="flex lg:flex-col h-full w-full space-x-1 lg:space-x-0 lg:w-1/3 lg:space-y-5">
          <div className="bg-black rounded-xl border-primary border w-full p-2 lg:p-5 text-center space-y-5">
            <h3 className="text-sm lg:text-2xl uppercase font-black">
              Orders Completed
            </h3>
            <p className="text-sm lg:text-xl font-bold">
              {booster.ordersCompleted}
            </p>
          </div>
          <div className="bg-black rounded-xl border-primary border w-full p-2 lg:p-5 text-center space-y-5">
            <h3 className="text-sm lg:text-2xl uppercase font-black">
              Boosting Since
            </h3>
            <p className="text-sm lg:text-xl font-bold">
              {booster.boostingSince}
            </p>
          </div>
          <div className="bg-black rounded-xl border-primary border w-full p-2 lg:p-5 text-center space-y-5">
            <h3 className="text-sm lg:text-2xl uppercase font-black">Roles</h3>
            <div className="text-sm lg:text-xl font-bold space-x-3 w-full flex text-center items-center justify-center">
              {booster.roles?.map((role, idx) => (
                // TODO: Add Role Icon :)
                <p key={idx} className="text-center">
                  {role}
                </p>
              ))}
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
                className="w-full rounded-xl border border-primary bg-black p-5 lg:max-h-[30vh]"
              >
                <div className="w-[90vw] lg:w-[30rem] h-full space-y-2">
                  <div className="w-full flex items-center justify-between h-1/3">
                    <div className="w-[40%] h-full flex items-center space-x-2 md:justify-between">
                      <Avatar className="md:h-full w-auto">
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
                    <div className="w-1/2 flex justify-between h-full items-center">
                      <div className="h-[90%] w-[45%] flex flex-col items-center justify-center">
                        <Image
                          src={tierMapping[review.order.from].href}
                          alt={tierMapping[review.order.from].label}
                          height={500}
                          width={500}
                          className="w-auto h-full"
                        />
                        <p className="text-white uppercase text-center text-xs">
                          {tierMapping[review.order.from].label}
                        </p>
                      </div>
                      <FaGreaterThan className="text-white text-2xl" />
                      <div className="h-[90%] w-[45%] flex flex-col items-center justify-center">
                        <Image
                          src={tierMapping[review.order.to].href}
                          alt={tierMapping[review.order.to].label}
                          height={500}
                          width={500}
                          className="w-auto h-full"
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
                    {review.review.comment.length >= 200 && (
                      <Link
                        href={review.link}
                        className="text-primary text-xs font-bold underline hover:text-primary/90 transition-colors"
                      >
                        Continue Reading
                      </Link>
                    )}
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

export default BoosterPageContainer;

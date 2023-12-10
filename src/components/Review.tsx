import React from "react";
import { nameify } from "@/lib/utils";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { tierMapping } from "@/lib/utils";
import { FaGreaterThan } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReviewCardInterface } from "@/lib/apiUtils";

function Review({ data }: { data: ReviewCardInterface }) {
  const stars = [...Array(Math.ceil(data.review.rating))];
  return (
    <div className="w-[400px] lg:w-[500px] rounded-xl border border-primary bg-dark p-7 space-y-2 shadow-base shadow-primary">
      <div className="w-[350px] lg:w-[450px] flex items-center justify-between">
        <div className="w-[40%] h-full flex items-center space-x-2 md:justify-between">
          <Avatar className="md:h-20 w-auto border">
            <AvatarImage
              src={data.customer.avatar}
              className="bg-white h-full w-auto"
            />
            <AvatarFallback className="text-light">
              {data.customer.name}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col h-full justify-around">
            <div>
              <p className="text-sm font-medium text-light  ">
                {data.customer.name}
              </p>
              <p className="text-xs text-gray-500 font-medium">
                {data.customer.tag}
              </p>
            </div>
            <div className="flex space-x-1">
              {stars.map((_, idx) => (
                <div key={idx}>
                  {idx !== stars.length - 1 ? (
                    <FaStar className="text-light text-xs" />
                  ) : data.review.rating % 1 === 0 ? (
                    <FaStar className="text-light text-xs" />
                  ) : (
                    <FaStarHalf className="text-light text-xs" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-full items-center space-x-2">
          <div className="h-16 sm:h-20 flex flex-col items-center justify-center">
            <Image
              src={tierMapping[data.order.from].href}
              alt={tierMapping[data.order.from].label}
              height={500}
              width={500}
              className="w-auto h-14 sm:h-16"
            />
            <p className="text-light   text-center text-xs">
              {tierMapping[data.order.from].label}
            </p>
          </div>
          <FaGreaterThan className="text-light text-2xl" />
          <div className="h-16 sm:h-20 flex flex-col items-center justify-center">
            <Image
              src={tierMapping[data.order.to].href}
              alt={tierMapping[data.order.to].label}
              height={500}
              width={500}
              className="w-auto h-14 sm:h-16"
            />
            <p className="text-light   text-center text-xs">
              {tierMapping[data.order.to].label}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[350px] lg:w-[450px] h-2/3 text-light space-y-2">
        <h3 className="font-normal">{data.review.heading}</h3>
        <p className="text-xs font-medium text-gray-500">
          {nameify(data.review.comment, 200)}
        </p>
      </div>
    </div>
  );
}

export default Review;

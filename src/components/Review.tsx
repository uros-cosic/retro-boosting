import React from "react";
import { nameify } from "@/lib/utils";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { tierMapping } from "@/lib/utils";
import { FaGreaterThan } from "react-icons/fa6";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReviewCardInterface } from "@/lib/apiUtils";

function Review({ data }: { data: ReviewCardInterface }) {
  const stars = [...Array(Math.ceil(data.review.rating))];
  return (
    <div className="w-full lg:w-[48%] rounded-xl border border-primary bg-black p-5 lg:h-[30vh] space-y-2">
      <div className="flex items-center justify-between h-1/3">
        <div className="w-[40%] h-full flex items-center space-x-2 md:justify-between">
          <Avatar className="md:h-full w-auto">
            <AvatarImage
              src={data.customer.avatar}
              className="bg-white h-full"
            />
            <AvatarFallback>{data.customer.name}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col h-full justify-around">
            <div>
              <p className="text-sm font-medium text-white uppercase">
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
                    <FaStar className="text-white text-xs" />
                  ) : data.review.rating % 1 === 0 ? (
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
              src={tierMapping[data.order.from].href}
              alt={tierMapping[data.order.from].label}
              height={500}
              width={500}
              className="w-auto h-full"
            />
            <p className="text-white uppercase text-center text-xs">
              {tierMapping[data.order.from].label}
            </p>
          </div>
          <FaGreaterThan className="text-white text-2xl" />
          <div className="h-[90%] w-[45%] flex flex-col items-center justify-center">
            <Image
              src={tierMapping[data.order.to].href}
              alt={tierMapping[data.order.to].label}
              height={500}
              width={500}
              className="w-auto h-full"
            />
            <p className="text-white uppercase text-center text-xs">
              {tierMapping[data.order.to].label}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-2/3 text-white space-y-2">
        <h3 className="font-bold">{data.review.heading}</h3>
        <p className="text-xs font-medium text-gray-500">
          {nameify(data.review.comment, 200)}
        </p>
        {data.review.comment.length >= 200 && (
          <Link
            href={data.link}
            className="text-primary text-xs font-bold underline hover:text-primary/90 transition-colors"
          >
            Continue Reading
          </Link>
        )}
      </div>
    </div>
  );
}

export default Review;

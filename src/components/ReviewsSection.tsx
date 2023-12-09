"use client";
import React, { useEffect, useState } from "react";
import Review from "./Review";
import { getTopReviews, ReviewCardInterface } from "@/lib/apiUtils";
import { Skeleton } from "./ui/skeleton";

function ReviewsSection() {
  const [reviews, setReviews] = useState<any>([]);

  const getReviews = async () => {
    const data: any = await getTopReviews();
    setReviews([...data, ...data]);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <section className="py-10 max-w-full mx-auto flex items-center px-1 overflow-x-hidden space-x-5">
      {!reviews.length ? (
        <>
          {[...Array(4)].map((_, idx) => (
            <Skeleton
              key={idx}
              className="w-[500px] h-52 bg-muted-foreground rounded-xl"
            />
          ))}
        </>
      ) : (
        <div className="flex w-max scroll gap-5">
          {reviews.map((review: ReviewCardInterface, idx: number) => (
            <Review key={idx} data={review} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ReviewsSection;

import React from "react";
import Review from "./Review";
import { getTopReviews, ReviewCardInterface } from "@/lib/apiUtils";

async function ReviewsSection() {
  const reviews: Array<ReviewCardInterface> | any = await getTopReviews();

  return (
    <section className="py-10 max-w-5xl mx-auto flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between px-1 lg:px-0">
      {reviews.map((review: ReviewCardInterface, idx: number) => (
        <Review key={idx} data={review} />
      ))}
    </section>
  );
}

export default ReviewsSection;

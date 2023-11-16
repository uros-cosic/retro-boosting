import React from "react";
import Review from "./Review";

import { ReviewInterface } from "@/lib/utils";

function ReviewsSection() {
  // temp reviews
  const reviews = [
    {
      customer: {
        name: "customer",
        tag: "@customer",
        avatar: "/img/temp/customer/customer.png",
      },
      order: {
        from: "D4",
        to: "M1",
      },
      review: {
        rating: 4.5,
        heading: "Lorem Ipsum",
        comment:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aperiam excepturi earum vitae. Facilis nihil id facere at voluptatem. Quae deleniti dolorem maxime fugiat, vel quas temporibus veniam ratione, fuga perferendis laboriosam doloremque eum nobis perspiciatis. Vitae necessitatibus harum natus quae quisquam magni dolores eaque reprehenderit ipsa cupiditate. Consectetur, est!",
      },
      link: "/reviews/custom_id_1",
    },
    {
      customer: {
        name: "customer",
        tag: "@customer",
        avatar: "/img/temp/customer/customer.png",
      },
      order: {
        from: "D4",
        to: "M1",
      },
      review: {
        rating: 4.5,
        heading: "Lorem Ipsum",
        comment:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aperiam excepturi earum vitae. Facilis nihil id facere at voluptatem. Quae deleniti dolorem maxime fugiat, vel quas temporibus veniam ratione, fuga perferendis laboriosam doloremque eum nobis perspiciatis. Vitae necessitatibus harum natus quae quisquam magni dolores eaque reprehenderit ipsa cupiditate. Consectetur, est!",
      },
      link: "/reviews/custom_id_2",
    },
  ];

  return (
    <section className="py-10 max-w-5xl mx-auto flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between">
      {reviews.map((review: ReviewInterface, idx: number) => (
        <Review key={idx} data={review} />
      ))}
    </section>
  );
}

export default ReviewsSection;

import NotFound from "@/app/not-found";
import SinglePageContainer from "@/components/SinglePageContainer";
import {
  BoosterCardInterface,
  getBoosterBySlug,
  getBoosterReviews,
} from "@/lib/apiUtils";
import React from "react";

async function Page({ params }: { params: { slug: string } }) {
  const data: any = await getBoosterBySlug(params.slug);

  if (data.status === "success") {
    const reviews: any = await getBoosterReviews(data.data._id);
    return (
      <div className="py-10">
        <SinglePageContainer
          type="booster"
          data={data.data}
          reviews={reviews.data}
        />
      </div>
    );
  }

  return <NotFound />;
}

export default Page;

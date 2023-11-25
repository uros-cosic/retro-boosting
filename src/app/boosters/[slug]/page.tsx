import NotFound from "@/app/not-found";
import BoosterPageContainer from "@/components/BoosterPageContainer";
import {
  BoosterCardInterface,
  getBoosterBySlug,
  getBoosterReviews,
} from "@/lib/apiUtils";
import React from "react";

async function Page({ params }: { params: { slug: string } }) {
  const data: BoosterCardInterface | any = await getBoosterBySlug(params.slug);

  if (data.status === "success") {
    const reviews: any = await getBoosterReviews(data.data._id);
    return (
      <div className="py-10">
        <BoosterPageContainer
          booster={data.data}
          reviews={reviews.data || []}
        />
      </div>
    );
  }

  return <NotFound />;
}

export default Page;

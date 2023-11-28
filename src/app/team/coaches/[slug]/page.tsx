import { getCoachBySlug, getCoachReviews } from "@/lib/apiUtils";
import React from "react";
import SinglePageContainer from "@/components/SinglePageContainer";
import NotFound from "@/app/not-found";

async function Page({ params }: { params: { slug: string } }) {
  const data: any = await getCoachBySlug(params.slug);

  if (data.status === "success") {
    const reviews: any = await getCoachReviews(data.data._id);
    return (
      <div className="py-10">
        <SinglePageContainer
          type="cocah"
          data={data.data}
          reviews={reviews.data}
        />
      </div>
    );
  }

  return <NotFound />;
}

export default Page;

import TeamPageContainer from "@/components/TeamPageContainer";
import { getTeam } from "@/lib/apiUtils";
import React from "react";

async function Page() {
  const data: any = await getTeam();
  if (data.status === "success") {
    return (
      <div className="py-10">
        <TeamPageContainer data={data.data} />
      </div>
    );
  }
}

export default Page;

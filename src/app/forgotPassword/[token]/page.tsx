import NewPasswordForm from "@/components/NewPasswordForm";
import { validatePasswordResetToken } from "@/lib/apiUtils";
import Link from "next/link";
import React from "react";

async function Page({ params }: { params: { token: string } }) {
  const data: any = await validatePasswordResetToken(params.token);

  if (data.status === "success") {
    return (
      <div className="max-w-xl mx-auto py-20 space-y-20">
        <h1 className="text-light text-2xl text-center">
          Choose Your New Password
        </h1>
        <NewPasswordForm />
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-32 space-y-20 text-light flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center">Token Not Found</h1>
      <div className="text-grayed text-center space-y-10">
        <p>Token has expired or doesn't exist</p>
        <p>
          Go to{" "}
          <Link href="/forgotPassword" className="underline">
            forgotPassword
          </Link>{" "}
          page to try again.
        </p>
      </div>
      <Link href="/" className="underline">
        HOME PAGE
      </Link>
    </div>
  );
}

export default Page;

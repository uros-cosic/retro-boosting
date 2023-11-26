import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import React from "react";

function Page() {
  return (
    <div className="py-32 text-white max-w-7xl mx-auto px-1 lg:px-0 space-y-10">
      <h1 className="text-center text-3xl">Forgot Password</h1>
      <ForgotPasswordForm />
    </div>
  );
}

export default Page;

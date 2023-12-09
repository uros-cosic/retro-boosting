import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RETRO-BOOSTING - Forgot Password",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi a illo ipsam, vero ipsum voluptates recusandae saepe repellat numquam.",
};

function Page() {
  return (
    <div className="py-32 text-light max-w-7xl mx-auto px-1 lg:px-0 space-y-10">
      <h1 className="text-center text-3xl">Forgot Password</h1>
      <ForgotPasswordForm />
    </div>
  );
}

export default Page;

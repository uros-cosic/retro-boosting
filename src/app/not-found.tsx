import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RETRO-BOOSTING - Not Found",
};

function NotFound() {
  return (
    <div className="py-10 h-[80vh] w-screen text-light flex flex-col items-center justify-center space-y-5">
      <h1 className="text-center text-3xl font-bold">404 - Not Found</h1>
      <p className="text-lg text-grayed text-center">
        {"Page that you are searching for was deleted or doesn't exist"}
      </p>
      <Link href="/" className="underline">
        Home Page
      </Link>
    </div>
  );
}

export default NotFound;

import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RETRO-BOOSTING - Not Found",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi a illo ipsam, vero ipsum voluptates recusandae saepe repellat numquam.",
};

function NotFound() {
  return (
    <div className="py-10 h-[80vh] w-screen text-white flex flex-col items-center justify-center space-y-5">
      <h1 className="text-center text-3xl font-bold">404 - Not Found</h1>
      <p className="text-lg text-gray-300 text-center">
        {"Page that you are searching for was deleted or doesn't exist"}
      </p>
      <Link href="/" className="underline">
        Home Page
      </Link>
    </div>
  );
}

export default NotFound;

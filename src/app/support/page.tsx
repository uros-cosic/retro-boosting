import React from "react";
import ContactForm from "@/components/ContactForm";
import ContentTop from "@/components/ContentTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RETRO-BOOSTING - Support",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi a illo ipsam, vero ipsum voluptates recusandae saepe repellat numquam.",
};

function Page() {
  return (
    <>
      <ContentTop heading="contact" />
      <ContactForm />
    </>
  );
}

export default Page;

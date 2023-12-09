import Image from "next/image";
import Link from "next/link";
import React from "react";

function TrustPilotSection() {
  return (
    <section className="py-10 w-full flex items-center justify-center px-1">
      <Link href="#" className="hover:opacity-70 transition-opacity">
        <Image
          src="/img/trust-temp-black.png"
          alt="trustpilot rating"
          height={150}
          width={1800}
          className="h-8 lg:h-12 w-auto"
        />
      </Link>
    </section>
  );
}

export default TrustPilotSection;

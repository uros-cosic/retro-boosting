import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

function BoostingPageNavigation() {
  const pathname = usePathname();

  const boostingServices = [
    {
      label: "solo boosting",
      href: "/boosting",
    },
    {
      label: "duo boosting",
      href: "/boosting/duo",
    },
    {
      label: "arena",
      href: "/boosting/arena",
    },
    {
      label: "win boosting",
      href: "/boosting/win",
    },
    {
      label: "normal matches",
      href: "/boosting/normals",
    },
  ];

  return (
    <nav className="py-5 w-full bg-black" id="nav">
      <ul className="flex w-full capitalize justify-between items-center px-3 lg:px-5">
        {boostingServices.map((boostingServiceObj) => (
          <li
            key={boostingServiceObj.label}
            className="flex items-center justify-center text-center h-full w-full"
          >
            <Link
              href={boostingServiceObj.href}
              className={twMerge(
                clsx(
                  "text-gray-300 hover:text-white transition-colors text-xs lg:text-xl",
                  {
                    "text-primary hover:text-primary/90":
                      pathname === boostingServiceObj.href,
                  }
                )
              )}
            >
              {boostingServiceObj.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BoostingPageNavigation;

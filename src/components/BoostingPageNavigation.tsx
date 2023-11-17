import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

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
    <nav className="py-5 w-full bg-black">
      <ul className="flex w-full text-xl capitalize justify-between items-center px-5 font-bold">
        {boostingServices.map((boostingServiceObj) => (
          <li key={boostingServiceObj.label}>
            <Link
              href={boostingServiceObj.href}
              className={clsx(
                "text-gray-300 hover:text-gray-200 transition-colors",
                {
                  "text-primary hover:text-primary/90":
                    pathname === boostingServiceObj.href,
                }
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

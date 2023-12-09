import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useSearchParams } from "next/navigation";

function BoostingPageNavigation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const boosterParam = searchParams.get("booster");

  const boostingServices = [
    {
      label: "solo boosting",
      href: "/boosting" + `${boosterParam ? `?booster=${boosterParam}` : ""}`,
    },
    {
      label: "duo boosting",
      href:
        "/boosting/duo" + `${boosterParam ? `?booster=${boosterParam}` : ""}`,
    },
    {
      label: "arena",
      href:
        "/boosting/arena" + `${boosterParam ? `?booster=${boosterParam}` : ""}`,
    },
    {
      label: "win boosting",
      href:
        "/boosting/win" + `${boosterParam ? `?booster=${boosterParam}` : ""}`,
    },
    {
      label: "normal matches",
      href:
        "/boosting/normals" +
        `${boosterParam ? `?booster=${boosterParam}` : ""}`,
    },
  ];

  return (
    <nav className="py-5 w-full bg-dark" id="nav">
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
                  "text-grayed hover:text-light transition-colors text-xs lg:text-xl",
                  {
                    "text-primary hover:text-primary/90":
                      pathname ===
                      boostingServiceObj.href.replace(/\?booster=[^&\s]+/, ""),
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

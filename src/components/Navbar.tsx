import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { PiUserCirclePlusLight, PiUserCircleLight } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

function Navbar() {
  const navLinks = [
    {
      label: "support",
      href: "/support",
    },
    {
      label: "boosting",
      href: "/boosting",
    },
    {
      label: "coaching",
      href: "/coaching",
    },
  ];

  const pathname = usePathname();
  return (
    <nav className="text-white mx-auto flex items-center justify-between h-full">
      <div className="h-full flex space-x-5 items-center">
        <div className="h-full flex items-center space-x-5 md:space-x-0">
          <div className="md:hidden h-full flex items-center">
            <Sheet>
              <SheetTrigger>
                <AiOutlineMenu className="text-2xl" />
              </SheetTrigger>
              <SheetContent side="left" className="bg-primary">
                <div className="flex flex-col h-full items-center justify-center uppercase space-y-5 font-medium text-gray-300">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Link href="/">
            <h1 className="text-sm md:text-xl font-bold uppercase">
              retro-boosting
            </h1>
          </Link>
        </div>
        <ul className="hidden md:flex uppercase items-center text-sm font-bold space-x-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  "text-gray-300 hover:text-gray-200 transition-colors",
                  {
                    "text-yellow": pathname === link.href,
                  }
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full space-x-2 md:space-x-5 uppercase text-xs md:text-sm font-bold flex items-center">
        <Link
          href="/register"
          className="h-1/2 bg-yellow rounded px-2 md:px-5 flex items-center text-primary hover:bg-yellow/80 transition-colors"
        >
          <PiUserCirclePlusLight className="text-xl mr-1" />
          register
        </Link>
        <Link
          href="/login"
          className="h-1/2 bg-primary rounded px-2 md:px-5 border-b-2 border-r-2 border-yellow flex items-center hover:text-gray-300 transition-colors"
        >
          <PiUserCircleLight className="text-xl mr-1" />
          login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { PiUserCirclePlusLight, PiUserCircleLight } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import Logo from "./Logo";
import { twMerge } from "tailwind-merge";

function Navbar() {
  const navLinks = [
    {
      label: "support",
      href: "/support#contact",
    },
    {
      label: "boosting",
      href: "/boosting#nav",
    },
    {
      label: "coaching",
      href: "/coaching#nav",
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
              <SheetContent side="left" className="bg-black">
                <div className="flex flex-col h-full items-center justify-center uppercase space-y-5 font-medium text-gray-300">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={"/" + link.href.split(/\/|#/)[1]}
                        className="underline"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <ul className="hidden md:flex uppercase items-center text-sm font-bold space-x-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={twMerge(
                  clsx("text-gray-300 hover:text-white transition-colors", {
                    "text-primary hover:text-primary/90":
                      pathname.split(/\/|#/)[1] === link.href.split(/\/|#/)[1],
                  })
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
          className="h-1/2 bg-secondary rounded px-2 md:px-5 flex items-center text-black hover:bg-secondary/80 transition-colors"
        >
          <PiUserCirclePlusLight className="text-xl mr-1" />
          register
        </Link>
        <Link
          href="/login"
          className="h-1/2 bg-black rounded px-2 md:px-5 border-b-2 border-r-2 border-secondary flex items-center hover:opacity-80 transition-colors"
        >
          <PiUserCircleLight className="text-xl mr-1" />
          login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

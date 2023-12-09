import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import Logo from "./Logo";
import { twMerge } from "tailwind-merge";
import RegisterDialog from "./RegisterDialog";
import LoginDialog from "./LoginDialog";
import { UserContext } from "@/lib/UserContext";
import { getMe } from "@/lib/apiUtils";
import AccountDialog from "./AccountDialog";
import { Skeleton } from "./ui/skeleton";
import ChangeTheme from "./ChangeTheme";

function Navbar() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    data: null,
  });

  const [loading, setLoading] = useState(true);

  const checkUser = async () => {
    const data: any = await getMe();
    if (data.status === "success") {
      setUser({
        isLoggedIn: true,
        data: data.data,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    checkUser();
  }, []);

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
    {
      label: "our team",
      href: "/team",
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="text-light mx-auto flex items-center justify-between h-full">
      <div className="h-full flex space-x-5 items-center">
        <div className="h-full flex items-center space-x-2 lg:space-x-0">
          <div className="lg:hidden h-full flex items-center">
            <Sheet>
              <SheetTrigger>
                <AiOutlineMenu className="text-2xl" />
              </SheetTrigger>
              <SheetContent side="left" className="bg-dark">
                <div className="flex flex-col h-full items-center justify-center uppercase space-y-5 font-medium text-grayed">
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
          <div className="border-grayed border-r px-3 lg:px-5 flex items-center justify-center">
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <Logo />
            </Link>
          </div>
        </div>
        <ul className="hidden lg:flex uppercase items-center text-xs font-normal space-x-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={twMerge(
                  clsx("text-grayed hover:text-light transition-colors", {
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
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {user.isLoggedIn ? (
          <div className="h-full flex items-center">
            <AccountDialog />
          </div>
        ) : (
          <div className="h-full space-x-2 md:space-x-5 flex items-center">
            {loading ? (
              <>
                <Skeleton className="h-1/2 bg-muted-foreground uppercase font-normal text-xs md:text-sm rounded px-2 md:px-5 text-muted-foreground">
                  x register
                </Skeleton>
                <Skeleton className="h-1/2 bg-muted-foreground uppercase font-normal text-xs md:text-sm rounded px-2 md:px-5 text-muted-foreground">
                  x login
                </Skeleton>
              </>
            ) : (
              <>
                <ChangeTheme />
                <RegisterDialog />
                <LoginDialog />
              </>
            )}
          </div>
        )}
      </UserContext.Provider>
    </nav>
  );
}

export default Navbar;

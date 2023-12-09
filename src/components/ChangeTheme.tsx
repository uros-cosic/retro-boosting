"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";

export default function ChangeTheme() {
  const [dark, setDark] = React.useState(
    document.querySelector("html")?.className === "dark"
      ? true
      : document.querySelector("html")?.className === "light"
      ? false
      : true
  );

  const { setTheme } = useTheme();

  const handleClick = () => {
    setTheme(!dark ? "dark" : "light");
    setDark(!dark);
  };

  return (
    <div
      className="cursor-pointer hover:opacity-70 transition-opacity"
      onClick={handleClick}
    >
      {dark ? (
        <FaRegMoon className="text-xl" />
      ) : (
        <FaRegSun className="text-xl" />
      )}
    </div>
  );
}

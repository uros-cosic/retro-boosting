"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";

export default function ChangeTheme() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="cursor-pointer hover:opacity-70 transition-opacity"
      onClick={handleClick}
    >
      {theme === "dark" ? (
        <FaRegMoon className="text-xl" />
      ) : (
        <FaRegSun className="text-xl" />
      )}
    </div>
  );
}

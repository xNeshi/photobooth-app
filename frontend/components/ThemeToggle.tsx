"use client";

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconAttributes = {
    strokeWidth: 2.5,
    className: "size-12 p-2 rounded-full",
  };

  const toggleThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;
  return (
    <Button
      onClick={toggleThemeHandler}
      className="rounded-full !p-0 !py-6 lphone:!pr-3 flex justify-center items-center gap-1"
    >
      {theme === "light" ? (
        <>
          <Sun {...iconAttributes} />
          <span className="hidden lphone:inline text-xl">Light Mode</span>
        </>
      ) : (
        <>
          <Moon {...iconAttributes} />
          <span className="hidden lphone:inline text-xl">Dark Mode</span>
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;

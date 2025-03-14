import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Logo from "./svgs/Logo";

export const Navbar = () => {
  return (
    <header className="px-2 py-4">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="ml-3"
        >
          <Logo
            width={70}
            color="[var(--background)]"
          />
        </Link>

        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;

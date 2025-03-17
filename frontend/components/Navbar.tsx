import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Logo from "./svgs/Logo";
import { auth } from "@/app/auth";
import SignOutModal from "./SignOutModal";

export const Navbar = async () => {
  const session = await auth();
  const isLoggedIn = session && session?.user;
  console.log(session);

  return (
    <header className="px-2 py-4 pr-3">
      <nav className="flex items-center justify-between">
        <Link
          href={isLoggedIn ? "/home" : "/"}
          className="ml-3"
        >
          <Logo
            width={70}
            color="[var(--background)]"
          />
        </Link>

        <div className="flex flex-row items-center gap-2">
          <ThemeToggle />

          {isLoggedIn ? <SignOutModal /> : null}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

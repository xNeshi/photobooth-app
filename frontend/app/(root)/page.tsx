import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Mail, User } from "lucide-react";
import SignInModal from "@/components/SignInModal";

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen -mt-20">
        <div className="flex flex-col w-[260px] items-center mphone:w-[320px] lphone:w-[500px]">
          <h1 className="text-5xl font-extrabold mphone:text-[62px] lphone:text-[80px] select-none">
            InstaCuts
          </h1>
          <h2 className="text-[16.5px] tracking-[.25em] mb-3 mphone:text-[20px] mphone:tracking-[.3em] lphone:text-[24px] lphone:tracking-[.35em] select-none">
            Online Photobooth
          </h2>
          <p className="text-[12px] text-gray-700 dark:text-gray-300 text-center italic mphone:text-[15px] lphone:text-[18px]">
            Instanly snap and cut for fun, stylish, and quick photo strips.
            Capture memories, customize your shots, and share them
            effortlessly—anytime, anywhere!
          </p>

          <div className="flex flex-col tablet:flex-row gap-2 w-full p-2 py-6">
            <Link
              href="/login"
              className={`${buttonVariants({
                variant: "outline",
              })} flex-1 tablet:text-[18px] p-2 tablet:p-5`}
            >
              <User className="tablet:size-6" />
              Continue As Guest
            </Link>
            <SignInModal />
          </div>
        </div>
      </section>
    </>
  );
}

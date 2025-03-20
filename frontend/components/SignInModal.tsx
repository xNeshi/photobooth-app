import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "./ui/button";
import { Mail } from "lucide-react";
import GoogleLogo from "./svgs/GoogleLogo";
import GitHubLogo from "./svgs/GithubLogo";
import Link from "next/link";
import FormFooter from "./FormFooter";

type SignInModalProps = {
  buttonText?: string;
};

export const SignInModal = ({ buttonText }: SignInModalProps) => {
  return (
    <Dialog>
      <DialogOverlay className="fixed inset-0 bg-white/05 backdrop-blur-xs" />
      <DialogTrigger asChild>
        {buttonText ? (
          <p className="cursor-pointer font-bold active:scale-95 transition-all duration-200 ease-out">
            {buttonText}
          </p>
        ) : (
          <Button
            className="flex-1 tablet:text-[18px] p-2 tablet:p-5"
            variant="outline"
          >
            <Mail className="tablet:size-6" />
            Sign In / Login
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="bg-[var(--background)] mphone:w-[375px] border-0 py-8 pb-10">
        <DialogHeader>
          <DialogTitle className="text-[25px]">Sign In</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-2 items-center justify-center">
          <Link
            href={`http://localhost:8000/login/google`}
            className="w-full"
          >
            <Button className="inline-flex !py-5 !px-4 gap-4 bg-[#EA4335] hover:bg-[#c53024] active:bg-[#a82a1e] justify-start items-center w-full text-[#e3dada] text-[14px] mphone:text-[17px] transition-all duration-200 ease-out">
              <GoogleLogo className="size-6 mphone:size-7" />
              Continue With Google
            </Button>
          </Link>

          <Button className="inline-flex !py-5 !px-4 gap-4 bg-[#2B3137] hover:bg-[#1f2227] active:bg-[#171a1d] justify-start items-center w-full text-[#e3dada] text-[14px] mphone:text-[17px] transition-all duration-200 ease-out">
            <GitHubLogo className="size-6 mphone:size-7 bg-white rounded-full pt-0.5" />
            Continue With Github
          </Button>

          <div className="flex items-center justify-center w-full gap-2 my-2">
            <hr className="flex-1 w-full border-t" />
            <span className="-mt-1">or</span>
            <hr className="flex-1 w-full border-t" />
          </div>

          <Link
            className={`${buttonVariants({
              variant: "outline",
            })}inline-flex !py-4 mphone:!py-5 !px-4 gap-4 hover justify-start items-center w-full text-[14px] mphone:text-[17px]`}
            href="/login"
          >
            <Mail className="size-6 mphone:size-7" />
            Continue With Email
          </Link>

          <DialogFooter className="mt-3">
            <FormFooter footerFor="login" />
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "@/app/auth";
import { DialogClose } from "@radix-ui/react-dialog";

export const SignInModal = () => {
  const handleLogout = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };

  return (
    <Dialog>
      <DialogOverlay className="fixed inset-0 bg-white/05 backdrop-blur-xs" />
      <DialogTrigger asChild>
        <Button className="rounded-full !p-0 !py-5 min-[550px]:!px-2 min-[550px]:!pr-4 flex justify-center items-center gap-1">
          <>
            <LogOut
              strokeWidth={2.5}
              className="size-11 p-2 rounded-full"
            />
            <span className="hidden min-[550px]:inline text-xl">Log Out</span>
          </>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[var(--background)] mphone:w-[375px] border-0 [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-[25px]">Sign Out</DialogTitle>
          <DialogDescription className="text-[14px]">
            Are you sure you want to sign out from your account? Once you log
            out, you'll need to sign back in to access your account.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-row gap-2 items-center justify-center">
          <Button
            onClick={handleLogout}
            className="flex-1 !py-4 mphone:!py-5 !px-4 gap-4 justify-center items-center w-full text-[14px] mphone:text-[17px] bg-red-600 hover:bg-red-700 active:bg-red-900 text-white "
          >
            Confirm
          </Button>
          <DialogClose asChild>
            <Button
              variant={"outline"}
              className="flex-1 !py-4 mphone:!py-5 !px-4 gap-4 justify-center items-center w-full text-[14px] mphone:text-[17px] "
            >
              Cancel
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;

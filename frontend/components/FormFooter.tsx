import Link from "next/link";
import SignInModal from "./SignInModal";

type FormFooterProps = {
  footerFor: "login" | "register";
};

export const FormFooter: React.FC<FormFooterProps> = ({ footerFor }) => {
  if (footerFor === "login") {
    return (
      <span className="inline-flex text-[9px] mphone:text-[12px] -mt-1 gap-1 w-full justify-center">
        Don't have an InstaCuts account?{" "}
        <Link
          href="/register"
          className="font-bold active:scale-95 transition-all duration-200 ease-out"
        >
          Register Now!
        </Link>
      </span>
    );
  } else if (footerFor === "register") {
    return (
      <span className="inline-flex text-[9px] mphone:text-[12px] -mt-1 gap-1 w-full justify-center">
        Already have an InstaCuts account? <SignInModal buttonText="Log In" />
      </span>
    );
  }
};

export default FormFooter;

import Link from "next/link";

export const FormFooter = () => {
  return (
    <span className="inline-flex text-[9px] mphone:text-[12px] -mt-1 gap-1 w-full justify-center">
      Don't have an InstaCuts account?{" "}
      <Link
        href="/"
        className="font-bold active:scale-95 transition-all duration-200 ease-out"
      >
        Register Now!
      </Link>
    </span>
  );
};

export default FormFooter;

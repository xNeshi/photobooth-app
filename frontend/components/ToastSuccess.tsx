import { Check } from "lucide-react";

type ToastSuccessProps = {
  children: React.ReactNode;
};

export const ToastSuccess = ({ children }: ToastSuccessProps) => {
  return (
    <div className="bg-[#1C8217] shadow-md text-white text-[14px] min-[500px]:pr-23  px-2 py-2.5 rounded-md">
      <Check
        className="size-6 inline mx-3"
        strokeWidth={3}
      />
      {children}
    </div>
  );
};

export default ToastSuccess;

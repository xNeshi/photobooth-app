import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type FormInputProps<T extends object> =
  React.ComponentPropsWithoutRef<"input"> & {
    type: string;
    inputFor: string;
    fieldData: string | undefined;
    placeholder?: string;
  };

export const FormInput = <T extends object>({
  type,
  inputFor,
  fieldData,
  placeholder,
  ...props
}: FormInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <input
        {...props}
        type={
          type === "password" ? (!showPassword ? "password" : "text") : type
        }
        id={inputFor}
        name={inputFor}
        defaultValue={fieldData}
        placeholder={
          placeholder
            ? placeholder
            : inputFor.charAt(0).toUpperCase() + inputFor.slice(1)
        }
        className="w-full border-b-[1px] px-3 py-1.5 rounded-md bg-[var(--background)]"
      />
      {type === "password" && (
        <div className="absolute right-0.5 top-1/2 pr-2 bg-[var(--background)] flex items-center justify-center rounded-r-lg -translate-y-1/2">
          <button
            onMouseDown={() => setShowPassword(true)} // Show password when holding
            onMouseUp={() => setShowPassword(false)} // Hide password when released
            onMouseLeave={() => setShowPassword(false)}
            type="button"
          >
            {showPassword ? (
              <Eye className="size-7 p-1 rounded-full hover:bg-[var(--hoverBg)] active:bg-[var(--activeBg)] active:scale-95" />
            ) : (
              <EyeOff className="size-7 p-1 rounded-full hover:bg-[var(--hoverBg)] active:bg-[var(--activeBg)] active:scale-95" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default FormInput;

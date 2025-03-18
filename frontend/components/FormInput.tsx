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
  return (
    <input
      {...props}
      type={type}
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
  );
};

export default FormInput;

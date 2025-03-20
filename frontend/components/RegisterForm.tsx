"use client";

import React, { useActionState, useEffect } from "react";
import { buttonVariants } from "./ui/button";
import { actionRegisterForm } from "@/lib/actions";
import FormErrorMessage from "./FormErrorMessage";
import FormInput from "./FormInput";
import FormFooter from "./FormFooter";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ToastSuccess from "./ToastSuccess";
import { Check } from "lucide-react";

export type RegisterFormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const RegisterForm = () => {
  const router = useRouter();
  const [state, action, isPending] = useActionState(
    actionRegisterForm,
    undefined
  );

  useEffect(() => {
    if (state?.status === "SUCCESS") {
      toast.custom(() => (
        <ToastSuccess>Account Created Successfully!!</ToastSuccess>
      ));
      router.push("/login");
    }
  }, [state?.status]);

  return (
    <form
      noValidate
      action={action}
      className="flex flex-col w-full mphone:w-[375px] items-start justify-center bg-[var(--secondaryBg)] rounded-xl shadow-lg gap-5 p-6 py-8 pb-10"
    >
      <h1 className="text-[23px] w-full text-center font-bold mphone:text-left">
        Register
      </h1>
      <div className="flex flex-col w-full items-start justify-center gap-3">
        <div className="flex flex-col w-full">
          <span
            className={`${state?.fieldErrors?.credentials ? "-mt-5 mb-1" : ""}`}
          >
            <FormErrorMessage
              error={state?.fieldErrors}
              errorFor="credentials"
            />
          </span>
          <FormInput
            type="name"
            inputFor="name"
            fieldData={state?.fieldData.name}
          />
          <FormErrorMessage
            error={state?.fieldErrors}
            errorFor="name"
            isMultiLine={true}
          />
        </div>
        <div className="flex flex-col w-full">
          <FormInput
            type="email"
            inputFor="email"
            fieldData={state?.fieldData.email}
          />
          <FormErrorMessage
            error={state?.fieldErrors}
            errorFor="email"
            isMultiLine={true}
          />
        </div>
        <div className="flex flex-col w-full">
          <FormInput
            type="password"
            inputFor="password"
            fieldData={state?.fieldData.password}
          />
          <FormErrorMessage
            error={state?.fieldErrors}
            errorFor="password"
          />
        </div>
        <div className="flex flex-col w-full">
          <FormInput
            type="password"
            inputFor="confirmPassword"
            placeholder="Confirm Password"
            useEye={false}
            fieldData={state?.fieldData.confirmPassword}
          />
          <FormErrorMessage
            error={state?.fieldErrors}
            errorFor="confirmPassword"
            isMultiLine={true}
          />
        </div>
      </div>
      <button
        type="submit"
        className={`${buttonVariants({ variant: "outline" })} w-full mt-2`}
        disabled={isPending}
      >
        {isPending ? "Logging In..." : "Submit"}
      </button>

      <FormFooter footerFor="register" />
    </form>
  );
};

export default RegisterForm;

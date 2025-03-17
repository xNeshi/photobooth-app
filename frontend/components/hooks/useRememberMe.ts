import { useEffect, useState } from "react";
import { LoginFormType } from "../LoginForm";

export const useRememberMe = (
  setLoginForm: React.Dispatch<React.SetStateAction<LoginFormType>>
) => {
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const rememberMeEmail = localStorage.getItem("rememberMeEmail");
    if (rememberMeEmail) {
      setLoginForm((prev: LoginFormType) => ({
        ...prev,
        email: rememberMeEmail,
      }));
      setRememberMe(true);
    }
  }, []);

  return { rememberMe, setRememberMe };
};

export default useRememberMe;

import { useEffect, useState } from "react";
import LoginForm, { LoginFormType } from "../LoginForm";

export const useRememberMe = (
  loginForm: LoginFormType,
  setLoginForm: React.Dispatch<React.SetStateAction<LoginFormType>>,
  setIsPending: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [rememberMe, setRememberMe] = useState(false);
  const key = "rememberMeEmail";

  useEffect(() => {
    const storedEmail = localStorage.getItem(key);
    if (storedEmail) {
      setLoginForm((prev) => ({ ...prev, email: storedEmail }));
      setRememberMe(true);
    }
  }, [key]);

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem(key, loginForm.email);
    } else {
      localStorage.removeItem(key);
    }
  }, [rememberMe]);

  return { rememberMe, setRememberMe };
};

export default useRememberMe;

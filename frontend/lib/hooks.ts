import { useEffect, useState } from "react";

export const useRememberMe = () => {
  const [updateEmail, setUpdateEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const key = "rememberMeEmail";

  useEffect(() => {
    if (!!localStorage.getItem(key)) {
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem(key, updateEmail);
    } else {
      localStorage.removeItem(key);
    }
  }, [rememberMe, updateEmail]);

  return { rememberMe, setRememberMe, setUpdateEmail };
};

export default useRememberMe;

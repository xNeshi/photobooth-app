import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export const useRememberMe = () => {
  const cookies = new Cookies();
  const key = "rememberMeEmail";

  const [updateEmail, setUpdateEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (!!cookies.get(key)) {
      setUpdateEmail(cookies.get(key));
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    if (rememberMe) {
      cookies.set(key, updateEmail);
    } else {
      cookies.remove(key);
    }
  }, [rememberMe, updateEmail]);

  return { rememberMe, setRememberMe, setUpdateEmail };
};

export default useRememberMe;

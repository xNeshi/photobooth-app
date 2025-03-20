import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export const useRememberMe = () => {
  const cookies = new Cookies();

  const [updateEmail, setUpdateEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const key = "rememberMeEmail";

  useEffect(() => {
    if (!!cookies.get(key)) {
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    if (rememberMe) {
      console.log("updateEmail", updateEmail);
      cookies.set(key, updateEmail);
    } else {
      cookies.remove(key);
    }
  }, [rememberMe, updateEmail]);

  return { rememberMe, setRememberMe, setUpdateEmail };
};

export default useRememberMe;

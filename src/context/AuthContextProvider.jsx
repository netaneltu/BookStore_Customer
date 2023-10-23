import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const [user, setUser] = useState(cookies.token ? true : false);

  const valueToShare = {
    user,
    setUser,
  };

  useEffect(() => {
    const authUser = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/users/customers/auth`,
          {
            headers: {
              Authorization: `${cookies.token}`,
            },
          }
        );

        setUser(data.user);
        setCookie("token", data.token, { path: "/", maxAge: 10800 });
      } catch (error) {
        console.log(error);
      }
    };
    
    if (cookies.token) {
      authUser();
    }
  }, [cookies.token]);
  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;

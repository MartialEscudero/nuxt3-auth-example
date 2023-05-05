import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { User } from "@/types";

export function useAuth() {
  const authUser = useAuthUser();
  const session = useCookie("_session");

  const setCookie = (cookie: string | null) => {
    if (cookie) {
      if (isTokenExpired(cookie)) {
        Cookies.remove("_session");
      } else {
        Cookies.set("_session", cookie);
      }
    } else {
      Cookies.remove("_session");
    }
  };

  const setUser = (user: User | null) => {
    if (user) {
      const decodedToken: User = decodeToken(user.token) as User;

      authUser.value = {
        token: user.token,
        exp: decodedToken.exp,
        username: decodedToken.username,
        role: decodedToken.role,
      };

      setCookie(user.token);
    } else {
      authUser.value = null;

      setCookie(null);
    }
  };

  const decodeToken = (token: string) => jwtDecode(token);

  const isTokenExpired = (token: string) => {
    const decodedToken: User = decodeToken(token) as User;
    const expirationDate = decodedToken.exp;
    const date = new Date();
    const currentDate = Math.floor(date.getTime() / 1000);

    if (expirationDate < currentDate) {
      return true;
    }

    return false;
  };

  const me = async () => {
    if (!authUser.value && session.value) {
      try {
        await fetch("http://localhost:3000/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${session.value}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setUser(data))
          .catch(() => setCookie(null));
      } catch (err) {
        setCookie(null);
      }
    }

    return authUser.value;
  };

  const login = async (email: string, password: string) => {
    await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        useNotyf("success", "You have successfully logged in.");
        navigateTo("/my-account");
      });
  };

  const logout = () => {
    if (authUser.value) {
      setUser(null);

      useNotyf("error", "You have successfully logged out.");

      return navigateTo("/");
    }
  };

  return {
    me,
    login,
    logout,
  };
}
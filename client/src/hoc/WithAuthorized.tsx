import { useEffect, useLayoutEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import LocalStorage from "../LocalStorage";

const WithAuth = (Component: any) => {
  const ProtectedComponent = () => {
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const isAuth = useAppSelector((state) => state.auth.isAuthorized);
    useEffect(() => {
      const token = LocalStorage.getToken();
      const user = LocalStorage.getItem("user");
      console.log(user);
      if (user) {
        setAuth(true);
      } else setAuth(false);
    }, []);
    return (
      <>
        {isAuth ? (
          <div>
            <Component />
          </div>
        ) : (
          <Navigate to="/" />
        )}
      </>
    );
  };
  return ProtectedComponent;
};

export default WithAuth;

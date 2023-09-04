import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import LocalStorage from "../LocalStorage";

const WithAuth = (Component: any) => {
  const token = LocalStorage.getToken();

  const ProtectedComponent = () => {
    return (
      <>
        {token ? (
          <div>
            <Component />
          </div>
        ) : (
          <Navigate to="/auth" />
        )}
      </>
    );
  };
  return ProtectedComponent;
};

export default WithAuth;

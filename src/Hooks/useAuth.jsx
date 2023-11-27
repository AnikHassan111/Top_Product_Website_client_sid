import { useContext } from "react";
import { ContextApi } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const auth = useContext(ContextApi);
  return auth;
};

export default useAuth;

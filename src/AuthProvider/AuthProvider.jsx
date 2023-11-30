import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/Firebase.config";
import useAxiosPublicApi from "../Hooks/axiosPublicapi/useAxiosPublicApi";

export const ContextApi = createContext(null);

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublicApi();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const profile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const logOut = () => {
    return signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      console.log("user", currentUser);
      const email = { email: currentUser?.email };
      if (currentUser) {
        axiosPublic.post("/jwt", email).then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
        });
      } else {
        localStorage.removeItem("token");
      }
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

  const authValue = {
    user,
    loading,
    createuser,
    singIn,
    logOut,
    profile,
    googleLogin,
  };
  return (
    <ContextApi.Provider value={authValue}>{children}</ContextApi.Provider>
  );
};

export default AuthProvider;

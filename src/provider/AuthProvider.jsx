import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../firebase/firebase.config";
const provider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  console.log(user);

  // user signup
  const userRegistration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user sign in
  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //user sign out
  const userSignOut = () => {
    return signOut(auth);
  };

  //update user profile
  const updateUserProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  //set a observer on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    loading,
    userRegistration,
    userSignIn,
    googleSignIn,
    userSignOut,
    updateUserProfile,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;

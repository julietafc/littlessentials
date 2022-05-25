import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { signOut, sendPasswordResetEmail, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, updateEmail, updatePassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [theUser, setTheUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [theUserName, setTheUserName] = useState("");

  // console.log("currentUser", currentUser);

  useEffect(() => {
    // const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log(user);
      user ? setTheUser(user) : setTheUser(null);
      setError("");
      setLoading(false);
      // console.log(user);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  function signup(email, password, userName) {
    setLoading(true);
    setTheUserName(userName);
    console.log("step1");
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("step2");
        return updateProfile(auth.currentUser, {
          displayName: userName,
        });
      })
      .then((res) => {
        console.log("after update", res);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }

  /*-------------------------------*/
  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function loginWithFacebook() {
    console.log("loginWithFacebook");
  }
  /*---------------------------------*/

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function udName(userName) {
    return updateProfile(auth.currentUser, {
      displayName: userName,
    });
  }
  // function udProfile(userName) {
  //   // console.log("udProfile");
  //   const userData = {
  //     displayName: userName,
  //   };
  //   return updateProfile(auth.currentUser, userData);
  // }

  function udEmail(email) {
    return updateEmail(auth.currentUser, email);
  }

  function udPassword(password) {
    return updatePassword(auth.currentUser, password);
  }

  const value = {
    signup,
    udName,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    udEmail,
    udPassword,
    theUser,
    theUserName,
    auth,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

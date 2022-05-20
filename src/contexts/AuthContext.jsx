import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { signOut, sendPasswordResetEmail, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, updateEmail, updatePassword } from "firebase/auth";

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
      console.log(user);
      user ? setTheUser(user) : setTheUser(null);
      setError("");
      setLoading(false);
      // console.log(user);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  // useEffect(() => {
  //   if (theUserName) {
  //     updateProfile(auth.currentUser, {
  //       displayName: theUserName,
  //     }).then((res) => {
  //       console.log(res);
  //     });
  //   }
  // }, [theUserName]);

  async function signup(email, password, userName) {
    setLoading(true);
    console.log("signup");
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        console.log(auth.currentUser);
        return updateProfile(auth.currentUser, {
          displayName: userName,
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }

  /*-------------------------------*/

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

  function udProfile(hola, userName) {
    console.log("udProfile");
    return updateProfile(hola, {
      displayName: userName,
    });
  }

  function udEmail(email) {
    return updateEmail(auth.currentUser, email);
  }

  function udPassword(password) {
    return updatePassword(auth.currentUser, password);
  }

  function udName(userName) {
    return updateProfile(auth.currentUser, {
      displayName: userName,
    });
  }

  const value = {
    theUser,
    signup,
    udProfile,
    udName,
    login,
    logout,
    resetPassword,
    udEmail,
    udPassword,
    auth,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

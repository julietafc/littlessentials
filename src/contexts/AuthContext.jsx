import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { signOut, sendPasswordResetEmail, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, updateEmail, updatePassword } from "firebase/auth";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // console.log("currentUser", currentUser);

  function signup(email, password, userName) {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: userName,
        });
      })
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function udEmail(email) {
    return updateEmail(auth.currentUser, email);
  }

  function udPassword(password) {
    return updatePassword(auth.currentUser, password);
  }

  useEffect(() => {
    // const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      // console.log(user);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    udEmail,
    udPassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

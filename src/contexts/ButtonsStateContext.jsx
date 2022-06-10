import React, { useContext, useState } from "react";

export const ButtonsStateContext = React.createContext();

export function useButtonsState() {
  return useContext(ButtonsStateContext);
}

export function ButtonsStateProvider({ children }) {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const value = {
    showSignup,
    setShowSignup,
    showLogin,
    setShowLogin,
    showChat,
    setShowChat,
  };

  return <ButtonsStateContext.Provider value={value}>{children}</ButtonsStateContext.Provider>;
}

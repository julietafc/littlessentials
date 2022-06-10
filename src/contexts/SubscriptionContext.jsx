import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

export const SubscriptionContext = React.createContext();

export function useSubscription() {
  return useContext(SubscriptionContext);
}

export function SubscriptionProvider({ children }) {
  const { theUser, theUserName } = useAuth();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [address, setAddress] = useState(null);
  const [deliveryAt, setDeliveryAt] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [inSubscription, setInSubscription] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (!localStorage.getItem("subscriber")) {
      const subscriber = {
        user: { name: null, email: null, ID: null },
        isPaid: false,
      };
      localStorage.setItem("subscriber", JSON.stringify(subscriber));
    }

    if (localStorage.getItem("subscriber")) {
      const subscription = JSON.parse(localStorage.getItem("subscriber"));
      subscription.size && setSelectedSize(Number(subscription.size.index));
      subscription.clothStyle && setSelectedStyle(Number(subscription.clothStyle.index));
      subscription.plan && setSelectedPlan(Number(subscription.plan.index));
      subscription.address && setAddress(subscription.address);
      subscription.deliveryAt && setDeliveryAt(subscription.deliveryAt);
      subscription.isPaid && setIsPaid(subscription.isPaid);
    }
  }, []);

  useEffect(() => {
    if (theUser && localStorage.getItem("subscriber")) {
      const subscription = JSON.parse(localStorage.getItem("subscriber"));
      subscription.user.name = theUser.displayName ? theUser.displayName : theUserName;
      subscription.user.email = theUser.email;
      subscription.user.ID = theUser.uid;
      localStorage.setItem("subscriber", JSON.stringify(subscription));
    }
  }, [theUser]);

  const value = {
    selectedSize,
    setSelectedSize,
    selectedStyle,
    setSelectedStyle,
    selectedPlan,
    setSelectedPlan,
    address,
    setAddress,
    deliveryAt,
    setDeliveryAt,
    inSubscription,
    setInSubscription,
    isPaid,
    setIsPaid,
    step,
    setStep,
  };

  return <SubscriptionContext.Provider value={value}>{children}</SubscriptionContext.Provider>;
}

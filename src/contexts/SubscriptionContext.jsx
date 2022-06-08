import React, { useContext, useState, useEffect } from "react";

export const SubscriptionContext = React.createContext();

export function useSubscription() {
  return useContext(SubscriptionContext);
}

export function SubscriptionProvider({ children }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [address, setAddress] = useState(null);
  const [deliveryAt, setDeliveryAt] = useState(null);
  const [inSubscription, setInSubscription] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("subscriber")) {
      const subscriber = {
        user: { name: null, email: null, ID: null },
        payed: false,
      };
      localStorage.setItem("subscriber", JSON.stringify(subscriber));
    }

    if (localStorage.getItem("subscriber")) {
      const subscription = JSON.parse(localStorage.getItem("subscriber"));
      subscription.size.index && setSelectedSize(Number(subscription.size.index) + 1);
      subscription.clothStyle.index && setSelectedStyle(Number(subscription.clothStyle.index) + 1);
      subscription.plan.index && setSelectedPlan(Number(subscription.plan.index) + 1);
      subscription.address && setAddress(subscription.address);
      subscription.deliveryAt && setDeliveryAt(subscription.deliveryAt);
    }
  }, []);

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
  };

  return <SubscriptionContext.Provider value={value}>{children}</SubscriptionContext.Provider>;
}

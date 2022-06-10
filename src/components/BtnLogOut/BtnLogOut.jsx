import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useSubscription } from "../../contexts/SubscriptionContext";
import { Button } from "react-bootstrap";
import styles from "../../sass/layout/buttons_links.module.scss";

export default function BtnLogOut() {
  const { logout } = useAuth();
  const { setInSubscription } = useSubscription();

  const [hover, setHover] = useState(false);
  const handleMauseOver = () => setHover(true);
  const handleMauseOut = () => setHover(false);

  const handleClick = (e) => {
    localStorage.removeItem("subscriber");

    logout();
  };

  return (
    <Button variant="link" onMouseOver={handleMauseOver} onMouseOut={handleMauseOut} className={`pt-0 pb-0 text-white text-decoration-none ${!hover && "text-opacity-50"} ${styles.linkButton}`} onClick={handleClick}>
      log out
    </Button>
  );
}

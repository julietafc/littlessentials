import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useSubscription } from "../../contexts/SubscriptionContext";
import { useButtonsState } from "../../contexts/ButtonsStateContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../../sass/layout/buttons_links.module.scss";

export default function BtnLogOut(props) {
  const { logout } = useAuth();
  const { inSubscription, setInSubscription } = useSubscription();
  const navigate = useNavigate();

  const [hover, setHover] = useState(false);
  const handleMauseOver = () => setHover(true);
  const handleMauseOut = () => setHover(false);

  const handleClick = async (e) => {
    logout()
      .then(() => {
        localStorage.removeItem("subscriber");
      })
      .then(() => {
        if (inSubscription) {
          navigate("/");
          setInSubscription(false);
        }
      });
  };

  return (
    <Button variant="link" onMouseOver={handleMauseOver} onMouseOut={handleMauseOut} className={`pt-0 pb-0 text-${props.color} text-decoration-none ${hover && "text-opacity-50"} ${styles.linkButton}`} onClick={handleClick}>
      log out
    </Button>
  );
}

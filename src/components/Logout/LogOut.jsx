import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "react-bootstrap";
import styles from "../../sass/layout/buttons_links.module.scss";

export default function LogOut() {
  const { logout } = useAuth();

  const [hover, setHover] = useState(false);
  const handleMauseOver = () => setHover(true);
  const handleMauseOut = () => setHover(false);

  return (
    <Button variant="link" onMouseOver={handleMauseOver} onMouseOut={handleMauseOut} className={`pt-0 pb-0 text-white text-decoration-none ${!hover && "text-opacity-50"} ${styles.linkButton}`} onClick={() => logout()}>
      log out
    </Button>
  );
}

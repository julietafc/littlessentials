import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ButtonCmp(props) {
  const { setShowSignup, setShowLogin } = useAuth();
  const [hover, setHover] = useState(false);
  const handleMauseOver = () => setHover(true);
  const handleMauseOut = () => setHover(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${props.path}`, { replace: true });
  };

  return (
    <>
      <Button className={` ${hover && "bg-transparent text-primary"} rounded-pill px-4`} type="button" onMouseOver={handleMauseOver} onMouseOut={handleMauseOut} onClick={handleClick} title={props.title}>
        {props.label}
      </Button>
    </>
  );
}

import { useState } from "react";
import { MenuItem2 } from "../MenuItems/MenuItems2";
import { Link } from "react-router-dom";
import "./Dropdown.scss";

export default function Dropdown2() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
        <h3>Welcome to Littlessentials; a subscription service for conscious moms and their little ones!</h3>
        {MenuItem2.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

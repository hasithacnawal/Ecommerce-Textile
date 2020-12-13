import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidenavData } from "./SidenavData";

function Sidenav() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSide = () => setSidebar(!sidebar);
  return (
    <>
      {" "}
      <div>
        <Link to="#">
          <FaIcons.FaBars onClick={toggleSide} />
        </Link>
      </div>
      {sidebar ? (
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" onClick={toggleSide}>
                <AiOutlineClose />
              </Link>
            </li>
            {SidenavData.map((item, index) => {
              return (
                <li key={index} className={item.className} onClick={toggleSide}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}

export default Sidenav;

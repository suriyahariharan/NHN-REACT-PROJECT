import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faNotesMedical ,faStethoscope ,faAddressCard } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import { Button } from "./Button";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar_container">
          <img src="data:image/jpeg;base64,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" className="navbar_logo" />
          <div className="name"><span>Su</span>rvival<span>K</span>it <span></span> </div>

          <div className="menu" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <ul className="nav_item">
                <Link to="/" className="nav_links" onClick={closeMobileMenu}>
                  Home <FontAwesomeIcon className="fa_icon" icon={faHome}  />
                </Link>
              </ul>

              <ul className="nav_item">
                <Link
                  to="/manager"
                  className="nav_links"
                  onClick={closeMobileMenu}
                >
                  Manager <FontAwesomeIcon className="fa_icon" icon ={faAddressCard}  />
                  {/* Manager */}
                </Link>
              </ul>

              <ul className="nav_item">
                <Link
                  to="/patient"
                  className="nav_links"
                  onClick={closeMobileMenu}
                >
                  Reports <FontAwesomeIcon className="fa_icon" icon={faStethoscope} />
                  {/* Patients */}
                </Link>
              </ul>

              <ul className="nav_item">
                <Link
                  to="/doctor"
                  ethid={"abcd"}
                  className="nav_links"
                  onClick={closeMobileMenu}
                >
                  Prescription <FontAwesomeIcon className="fa_icon" icon={faNotesMedical}/>
                  doctor
                </Link>
              </ul>
            </ul>
            {/* {button && <Button buttonStyle="btn--outline" >SIGN UP</Button>} */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

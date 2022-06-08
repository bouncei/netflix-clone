import React from "react";
import applogo from "../assets/try.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaSearch, FaWindowClose } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      // Removing the event listener
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`header ${show && "header__black"}`}>
      <div>
        <div className="logoContainer">
          <Link href="/">
            <Image
              src={applogo}
              alt="logo"
              height={35}
              // width={110}
              style={{
                cursor: "pointer",
                paddingTop: 7,
              }}
              className="netflix-logo"
            />
          </Link>
        </div>
      </div>

      {/* SearchBar, ProfileIcon and Notifications Bar */}
      <div className="headerEnd">
        {/*<{div className="EndItem">
          <FaSearch />
        </div>
        <div className="kids">Kids</div>
        <div className="EndItem">
          <BsBellFill />
          </div>*/}
        <div className="EndItem">
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Header;

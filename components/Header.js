import React from "react";
import applogo from "../assets/main.png";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link href="/">
          <div className="logoContainer">
            <Image
              src={applogo}
              alt="logo"
              height={49.9}
              width={110}
              style={{
                cursor: "pointer",
                paddingTop: 7,
              }}
            />

            {/* Header Items */}
            <div className="headerItems">
              <div className="headerItem">Home</div>
              <div className="headerItem">Tv Shows</div>
              <div className="headerItem">Movies</div>
              <div className="headerItem">New & Popular</div>
              <div className="headerItem">My List</div>
            </div>
          </div>
        </Link>
      </div>

      {/* SearchBar, ProfileIcon and Notifications Bar */}
      <div className="headerEnd">
        <div className="EndItem">
          <FaSearch />
        </div>
        <div className="kids">Kids</div>
        <div className="EndItem">
          <BsBellFill />
        </div>
        <div className="EndItem">
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Header;

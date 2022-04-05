import React from "react";
import applogo from "../assets/main.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <div className="logoContainer">
          <Image src={applogo} alt="logo" height={43} width={100} />

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

      {/* SearchBar, ProfileIcon and Notifications Bar */}
      <div className="headerEnd">
        <div className="searchBar"></div>
        <div className="kidSection"></div>
        <div className="NotificationIcon"></div>
        <div className="ProfileIcon"></div>
      </div>
    </div>
  );
};

export default Header;

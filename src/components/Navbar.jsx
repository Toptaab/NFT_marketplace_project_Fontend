import React from "react";
import Logo from "../ui/Navbar/Logo";
import Searchbar from "../ui/Navbar/Searchbar";
import Direction from "../ui/Navbar/Direction";
import Profile from "../ui/Navbar/Profile";

function Navbar() {
  return (
    <>
      <div className="w-dvw bg-white   flex items-center justify-between px-[2rem] h-[5rem]">
        <Logo />
        <Searchbar />
        <Direction />
        <Profile />
      </div>
    </>
  );
}

export default Navbar;

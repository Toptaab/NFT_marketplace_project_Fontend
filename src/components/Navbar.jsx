import React from "react";
import Logo from "../ui/Navbar/Logo";
import Searchbar from "../ui/Navbar/Searchbar";
import Direction from "../ui/Navbar/Direction";
import Profile from "../ui/Navbar/Profile";
import useAppContext from "../hooks/useAppContext";
import Spinner from '../ui/Spinner'
function Navbar() {
  const {loading} = useAppContext()

  if(loading) { <Spinner/>}
  return (
    <>
      <div className="w-dvw bg-white   flex items-center justify-between px-[2rem] h-[4rem]">
        <Logo />
        <Searchbar />
        <Direction />
        <Profile />
      </div>
    </>
  );
}

export default Navbar;

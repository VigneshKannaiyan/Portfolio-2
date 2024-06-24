import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[100000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB
          <span className="text-yellow-300">DEV</span>
        </h1>
        <div className="nav-link">
          <a href="#home">HOME</a>
        </div>
        <div className="nav-link">
          <a href="#services">SERVICES</a>
        </div>
        <div className="nav-link">
          <a href="#about">ABOUT</a>
        </div>
        <div className="nav-link">
          <a href="#project">PROJECT</a>
        </div>
        <div className="nav-link">
          <a href="#contact">CONTACT</a>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;

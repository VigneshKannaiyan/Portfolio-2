import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[100000] top-0 h-[12vh] bg-[#3a5480] bg-opacity-45 shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <div className="relative w-[full] max-w-[170px] max-h-[100%] h-[50vw] md:w-[80vw] md:h-[200px] overflow-hidden rounded-lg">
          <a href="#home">
            {" "}
            <img
              src="/images/developer.gif"
              alt="Fitting Image"
              className="w-full h-full object-contain rounded-lg"
            />
          </a>
        </div>
        <h1 className="hidden md:flex flex-[0.6] cursor-pointer text-white font-bold text-[6vw] md:text-[4vw] lg:text-[3vw] xl:text-[35px]">
          PORT
          <span className="text-yellow-300">FOLIO</span>
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
          <a href="#technology">TECHNOLOGIES</a>
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

import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      onClick={closeNav}
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="relative inset-0 top-0 flex items-center justify-center gap-8 mb-8">
          <a
            href="https://www.instagram.com/coimbatore_columbus/"
            target="_blank"
          >
            <FaInstagram className="w-12 h-12 text-[#f552f2] hover:text-white" />
          </a>
          <a href="https://github.com/VigneshKannaiyan" target="_blank">
            <FaGithub className="w-12 h-12 text-[#b9b8b8]  hover:text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/vignesh-k-b40ab718b/"
            target="_blank"
          >
            <FaLinkedin className="w-12 h-12 text-[#5fbfec]  hover:text-white" />
          </a>
          <a href="https://wa.me/9952209682" target="_blank">
            <FaWhatsapp className="w-12 h-12 text-[#40f381]  hover:text-white" />
          </a>
        </div>
        <div className="nav-link-mobile">
          <a href="#home">HOME</a>
        </div>
        <div className="nav-link-mobile">
          <a href="#services">SERVICES</a>
        </div>
        <div className="nav-link-mobile">
          <a href="#about">ABOUT</a>
        </div>
        <div className="nav-link-mobile">
          <a href="#project">PROJECT</a>
        </div>
        <div className="nav-link-mobile">
          <a href="#technology">TECHNOLOGIES</a>
        </div>
        <div className="nav-link-mobile">
          <a href="#contact">CONTACT</a>
        </div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[3rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;

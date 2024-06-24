import React, { useState } from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center overflow-hidden"
      id="home"
    >
      <Particle />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
          <div>
            <h1 className="text-[35px] md:text-[50px] text-white font-bold">
              Hi, I'm{" "}
              <span className="text-yellow-400">Vignesh Kannaiyan!</span>
            </h1>
            <TextEffect />
            <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
              Versatile Software Developer with broad industry experience in{" "}
              <span className="text-[#ffffff]">
                Node.js, Express.js, NestJS, ReactJS, Next.js, Prisma ORM,
                MongoDB, MySQL, Sequelize, JavaScript, microservices, and
                containerization (Docker, Kubernetes, Podman) and SIEM tools.
              </span>{" "}
              Adaptable team player, quick to master new technologies and
              languages.
            </p>
            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
              <a
                href="/files/VIGNESH_KANNAIYAN_12052024.pdf"
                download
                className="inline-block"
              >
                <button className="box">
                  <div className="flex items-center">
                    <p className="glowing-txt">
                      Download <span className="faulty-letter">Resume</span>
                    </p>
                    <ArrowDownTrayIcon className="animate-bounce ml-2 w-[1.6rem] h-[1.7rem] text-yellow-500 glowing-txt" />
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="100">
            <div
              className="w-[600px] hidden bg-[#00ccff] relative lg:flex items-center rounded-full h-[550px] transition-shadow"
              style={{
                boxShadow: isHovered
                  ? "0 0 25px 3px #00ccff" // blue-00ccff orange-ff6600 yellow-f4b400
                  : "",
              }}
              //onMouseEnter Event added for the shadow changes onHover
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative w-full h-full overflow-hidden rounded-full border-2 #00ccff">
                <Image
                  src="/images/u1.jpg"
                  alt="user"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

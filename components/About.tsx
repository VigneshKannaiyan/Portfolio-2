import React, { useState } from "react";
import Image from "next/image";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] mt:pt-[8rem]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] font-bold text-white">
            {/*  lg:text-[45px] mb:leading-[3rem] leading-[2rem] capitalize mb-[3rem]  */}
            Experienced Developer &{" "}
            <span className="text-yellow-400">Avid Sports Fan</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              With over 5 years of dedicated backend development expertise and 6
              months of front-end proficiency, I am also an avid sports
              enthusiast, enjoying test cricket and F1. Can play badminton,
              cricket and hockey. I thrive in dynamic environments, fostering
              teamwork and innovation both on the field and in my professional
              endeavors.
            </p>
          </div>
          {/* <button></button> */}
        </div>
        <div data-aos="fade-left">
          <div
            className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative duration-300 hover:-rotate-[360deg]"
            style={{
              boxShadow: isHovered
                ? "0 0 25px 3px #f4b400" // blue-00ccff orange-ff6600 yellow-f4b400
                : "",
            }}
            //onMouseEnter Event added for the shadow changes onHover
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/images/about.jpg"
              alt="user"
              layout="fill"
              objectFit="contain"
              className="relative z-[11] x-[100%] h-[100%] object-contain"
            />
            <div
              className="absolute w-[100%] h-[100%] z-[10] bg-[#8155e6] top-[-2rem] right-[-2rem]"
              style={{
                boxShadow: isHovered
                  ? "0 0 25px 3px #66ffff" // blue-00ccff orange-ff6600 yellow-f4b400
                  : "",
              }}
            ></div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-[#09101a] pt-[4rem] md:pt-[8rem] pb-[2rem]" id="project">
      <h1 className="heading">
        Proj<span className="text-yellow-400">ects</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] ">
        <div data-aos="fade-up">
          <div
            className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 w-[100%] h-[200px]
          md:h-[300px] "
          >
            <Image
              src="/images/cp4d2.jpg"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <div
            className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 w-[100%] h-[200px]
          md:h-[300px] "
          >
            <Image
              src="/images/adanionepranaam2.jpg"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <div
            className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 w-[100%] h-[200px]
          md:h-[300px] "
          >
            <Image
              src="/images/hmis.jpg"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <h6
        className="heading md:pt-[1rem] text-xs font-semibold underline underline-offset-8"
      >
        (My Last 3 Notable Projects)
      </h6>
    </div>
  );
};

export default Projects;

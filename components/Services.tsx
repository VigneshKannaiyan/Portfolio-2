import {
  CloudIcon,
  CommandLineIcon,
  InboxStackIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div
      className="bg-[#121121] pt-[4rem] md:pt-[8rem] pb-[5rem]"
      id="services"
    >
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto items-center gap-[3rem] 
      mt-[4rem] text-white"
      >
        <div data-aos="zoom-in-left" data-aos-delay="400">
          <div
            className="bg-[#00ccff] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 
          uppercase font-semibold text-center p-[2rem]"
          >
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] md-[1.5rem]">
              FrontEnd
            </h1>
            <p className="text-[15px] text-[#fffdfd] font-normal">
              Over the past 6 months, I've diligently cultivated a strong
              foundation in React.js, Next.js, and Tailwind CSS. My expertise
              spans JavaScript, TypeScript, and backend integration with Fetch
              and Axios, enabling me to deliver robust, responsive, and scalable
              web solutions efficiently.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-left">
          <div
            className="bg-[#009900] hover:scale-110 transform transition-all duration-100 hover:-rotate-6 
          uppercase font-semibold text-center p-[2rem]"
          >
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] md-[1.5rem]">
              BackEnd
            </h1>
            <p className="text-[15px] text-[#ffffff] font-normal">
              Expertise in Node.js frameworks like Express.js, NestJS, and
              Koa.js, I specialize in JavaScript and TypeScript for backend
              development. Proficient in creating microservices and integrating
              with databases, I also bring robust skills in unit testing using
              Mocha and Chai.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-right">
          <div
            className="bg-[#cc33ff] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 
          uppercase font-semibold text-center p-[2rem]"
          >
            <CloudIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] md-[1.5rem]">
              Full Stack
            </h1>
            <p className="text-[15px] text-[#ffffff] font-normal">
              Full Stack Developer with 6 months of React.js, Next.js, and
              Tailwind CSS experience, and 5 years in backend Node.js
              (Express.js, NestJS, Koa.js). Proficient in JavaScript,
              TypeScript, microservices, Docker, and Jenkins, adept at
              integrating front-end and backend for dynamic web solutions.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-right" data-aos-delay="400">
          <div
            className="bg-[#ff9933] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 
          uppercase font-semibold text-center p-[2rem]"
          >
            <InboxStackIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] md-[1.5rem]">
              DataBase
            </h1>
            <p className="text-[15px] text-[#ffffff] font-normal">
              Over 5 years, I've gained extensive proficiency in MongoDB and
              MySQL, utilizing ORMs like Prisma and Sequelize.js. I
              excel in both raw query implementations and seamlessly integrating
              backend applications, ensuring robust performance and scalability.
              (MongoDB+Prisma MySQL+SequelizeJs)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

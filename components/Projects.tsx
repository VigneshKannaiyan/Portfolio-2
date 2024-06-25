import React, { useState } from "react";
import Image from "next/image";
import { LinkIcon } from "@heroicons/react/20/solid";

const Projects = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const projects = [
    {
      src: "/images/cp4d2.jpg",
      name: "CP4D",
      alt: "portfolio",
      site: "https://www.ibm.com/products/cloud-pak-for-data",
      description: `IBM Cloud Pak® for Data is a modular set of integrated software components for data analysis, organization and
management. It is available for self-hosting, or as a managed service on IBM Cloud & others. Break down data silos,
Access data across business silos, on premises and in clouds, without moving the data. Keep data private and secure,
Universally safeguard data usage with privacy and usage policy enforcement across all data. Empower all data
consumers, Enable users of all skill levels to access trusted data with tailored interfaces (Code, Canvas, No Code).`,
    },
    {
      src: "/images/adanionepranaam2.jpg",
      name: "AdaniOne",
      alt: "portfolio",
      site: "https://www.adanione.com/",
      description: `Adanione is product where a user can book air tickets, train tickets, hotel stay, travel packages, cabs, porter
service, duty free items and also a meet and greet service name Pranaam all mode of payments are integrated
with JusPay. The user will be rewarded by reward points and various coupon codes. The main scope of the product
is to give the user un paralleled experience of travel and lifestyle across the nation.`,
    },
    {
      src: "/images/hmis.jpg",
      name: "TN-HMIS",
      alt: "portfolio",
      site: "https://tnhmislims.org/",
      description: `A web application for monitoring the Hospital details such as patients information, doctor’s information,
hospital staffs information, assets information, inventory information etc. Based on the roles given to user their access in
the application also varies. Main scope of this application is reduce the time consumption occurs in this department. Not only
doctors and patients information the dealers and manufacturers, drivers, launderers and who are all associated with the
hospital environment are also gets benefits by this application. This project is currently in live for Government of TamilNadu
and Government of Maharashtra.`,
    },
  ];

  return (
    <div className="bg-[#09101a] pt-8 md:pt-16 pb-8" id="project">
      <h1 className="text-center text-white text-3xl md:text-4xl heading">
        Proj<span className="text-yellow-400">ects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative transform hover:-translate-y-6 transition-all duration-200 rounded-lg overflow-hidden"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={project.src}
              alt={project.alt}
              layout="responsive"
              width={800}
              height={600}
              className={`object-cover ${
                hoveredImage === index ? "filter blur-lg" : ""
              }`}
            />
            {hoveredImage === index && (
              <a href={project.site} target="_blank" rel="noopener noreferrer">
                <button className="absolute inset-0 flex items-center justify-center bg-opacity-75 text-[#03ffcd] bg-[#000000] font-bold rounded-lg transition-opacity duration-300">
                  <span className="relative inline-flex items-center text-lg">
                    {project.name}
                    <LinkIcon className="ml-2 w-6 h-6 text-[#8c8c8c]" />
                  </span>
                  <span className="text-[#ffffff] text-center mt-2 overflow-hidden overflow-ellipsis">
                    {project.description}
                  </span>
                </button>
              </a>
            )}
          </div>
        ))}
      </div>
      <h6 className="text-center mt-4 text-xs font-semibold text-white underline underline-offset-8">
        (My Last 3 Notable Projects)
      </h6>
    </div>
  );
};

export default Projects;

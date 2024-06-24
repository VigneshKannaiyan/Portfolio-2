import React from "react";
import TechnologySlider from "./TechnologySlider";

const Technology = () => {
  return (
    <div
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem] "
      id="technology"
    >
      <h1 className="heading glowing-txt">
        Technologies
        {/* <span className="text-yellow-400">Project</span> */}
      </h1>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
        <TechnologySlider />
      </div>
    </div>
  );
};

export default Technology;

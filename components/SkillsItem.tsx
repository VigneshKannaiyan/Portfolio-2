import React from "react";

interface Props {
  course: string;
  institution: string;
  year: string;
}

const SkillsItem = ({ course, institution, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-gradient">
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {course} <h4 className="text-[15px] text-[#aaaaaa]">({institution})</h4>
      </h1>
    </div>
  );
};

export default SkillsItem;

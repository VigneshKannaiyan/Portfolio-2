import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="bg-[#09101a] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem
            course="HSLC"
            institution="MNC Matric Hr Sec School"
            year="2012 - 2014"
          />
          <SkillsLanguage
            skill1="Node Js"
            skill2="MongoDB"
            skill3="javascript"
            level1="w-[90%]"
            level2="w-[80%]"
            level3="w-[80%]"
          />
        </div>
        <div>
          <SkillsItem
            course="B.Tech IT"
            institution="Anna University (BIT-Campus)"
            year="2014 - 2018"
          />

          <SkillsLanguage
            skill1="React Js"
            skill2="SQL"
            skill3="Typescript"
            level1="w-[75%]"
            level2="w-[78%]"
            level3="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React, { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

const Skills = () => {
  const { siteData } = useContext(LanguageContext);
  return (
    <div className="dark:bg-lightgrey skills-section">
      <div className="px-10 flex flex-col items-center py-20 ">
        <h2 className="text-5xl dark:text-silver font-medium">
          {siteData.skills.header}
        </h2>
        <div className="relative z-10 flex flex-wrap justify-center gap-9 py-14">
          {siteData.skills.skills.map((skill, idx) => {
            return (
              <div key={idx} className="flex flex-col items-center w-[120px]">
                <img src={skill.logo} alt={skill.name} />
                <h4 className="text-grey dark:text-dirtywhite text-2xl pt-2 font-medium uppercase">
                  {skill.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

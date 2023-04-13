import React, { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

import { BsArrowRight } from "react-icons/bs";
import mockUp1 from "../images/Rectangle 37.png";
import mockUpFoto1 from "../images/mockupfoto1.png";
import mockUpFoto2 from "../images/mockupfoto2.png";

const Projects = () => {
  const { siteData } = useContext(LanguageContext);
  return (
    <div className="dark:bg-lightgrey dark:text-[#FFFFFF]">
      <div className="container flex flex-row flex-wrap py-20">
        <h2 className="text-4xl font-medium pb-9 w-full text-center">
          {siteData.projects.header}
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue dark:bg-darkolive relative mx-4 min-h-[668px] rounded-[12px]">
            <div className="px-10 py-12">
              <h5 className="text-3xl font-bold font-playfairDisplay pb-5 tracking-wider">
                {siteData.projects.randomJokes.header}
              </h5>
              <p className="pr-12 pb-5">
                {siteData.projects.randomJokes.jokes}
              </p>
              <div className="pr-16 pb-9 flex flex-wrap gap-2 font-bold font-playfairDisplay tracking-wider">
                {siteData.projects.randomJokes.pills.map((pill, idx) => {
                  return (
                    <span
                      key={idx}
                      className="px-5 py-2 bg-[#FFFFFF] dark:bg-shadow rounded-[76px]"
                    >
                      {pill}
                    </span>
                  );
                })}
              </div>
              <div className="flex justify-between font-semibold text-xl">
                <a href="https://github.com/alprdmrc">View on Github</a>
                <a href="https://github.com/alprdmrc">
                  Go to app <BsArrowRight className="inline" />
                </a>
              </div>
            </div>

            <img
              className="absolute -bottom-6 w-[92%] right-0 left-0 mx-auto"
              src={mockUpFoto1}
              alt="Mockupfoto1"
            />
            <img
              className="absolute -bottom-11 mx-auto w-full"
              src={mockUp1}
              alt="Mockup1"
            />
          </div>

          <div className="bg-green dark:bg-olive relative mx-4 min-h-[668px] rounded-[12px]">
            <div className="px-10 py-12">
              <h5 className="text-3xl font-bold font-playfairDisplay pb-5 tracking-wider">
                {siteData.projects.youBored.header}
              </h5>
              <p className="pr-12 pb-5">{siteData.projects.youBored.jokes}</p>
              <div className="pr-16 pb-9 flex flex-wrap gap-2 font-bold font-playfairDisplay tracking-wider">
                {siteData.projects.youBored.pills.map((pill, idx) => {
                  return (
                    <span
                      key={idx}
                      className="px-5 py-2 bg-[#FFFFFF] dark:bg-shadow rounded-[76px]"
                    >
                      {pill}
                    </span>
                  );
                })}
              </div>
              <div className="flex justify-between font-semibold text-xl">
                <a href="https://github.com/alprdmrc">View on Github</a>
                <a href="https://github.com/alprdmrc">
                  Go to app <BsArrowRight className="inline" />
                </a>
              </div>
            </div>

            <img
              className="absolute -bottom-6 w-[92%] right-0 left-0 mx-auto"
              src={mockUpFoto2}
              alt="Mockupfoto1"
            />
            <img
              className="absolute -bottom-11 mx-auto w-full"
              src={mockUp1}
              alt="Mockup1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

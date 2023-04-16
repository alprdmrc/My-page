import React, { useContext } from "react";
import profile from "../images/profile.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { LanguageContext } from "../context/languageContext";

const Hero = ({ darkMode, handleDarkMode }) => {
  const { siteData, language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="bg-silver dark:bg-darkgrey hero-section relative">
      <div className="container md:justify-center md:flex-col flex flex-wrap pb-24">
        <div className="top-bar py-16 px-10 w-full sm:p-8">
          <div className="justify-end sm:justify-center flex flex-row items-center">
            <div className="flex flex-row justify-between toggle">
              <label
                htmlFor="dark-toggle"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    name="dark-mode"
                    id="dark-toggle"
                    className="checkbox hidden"
                    onClick={(e) => handleDarkMode(e)}
                    checked={darkMode}
                  />
                  <div className="block bg-cherry dark:bg-coal w-14 h-6 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 bg-yellow dark:bg-white bg-gray-800 w-4 h-4 rounded-full transition"></div>
                </div>
                <div className="ml-3 dark:text-white text-grey dark:text-dirtywhite font-bold uppercase tracking-widest">
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </div>
              </label>
            </div>
            <div className="ml-4 mr-6 text-grey font-bold">|</div>
            <div
              className="text-grey font-bold uppercase tracking-widest cursor-pointer"
              onClick={toggleLanguage}
            >
              <span className="text-cherry">
                {language === "tr" ? "Ingilizce" : "Turkce"}
              </span>
              'ye Geç
            </div>
          </div>
        </div>
        <div className="basis-3/5 sm:w-[100%] dark:text-[#FFFFFF] sm:text-center">
          <p className="text-3xl pb-4">{siteData.intro.greeting}</p>
          <p className="intro-text text-[2.5rem] font-medium pr-14 pb-14 sm:pr-0 sm:text-[2rem] ">
            {siteData.intro.intro}
          </p>
          <div className="text-3xl dark:text-dirtywhite flex gap-2 pb-5 sm:justify-center">
            <FaLinkedinIn />
            <AiFillGithub />
          </div>
          {/* UUPS, set color of some words of jsx text with -dangerous thing- */}
          <p
            className="pr-40 current-text sm:p-0"
            dangerouslySetInnerHTML={{
              __html: siteData.intro.current.replace(
                /{(.*?)}/g,
                '<span style="color : #AF0C48">$1</span>'
              ),
            }}
          ></p>
        </div>
        <div className="profile-img basis-2/5">
          <img
            className="mx-auto my-12 w-[341px] h-[341px] object-cover rounded-[22px] shadow-[-20px_-20px_#E92577]"
            src={profile}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

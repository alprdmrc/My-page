import React, { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

const Footer = () => {
  const { siteData } = useContext(LanguageContext);
  return (
    <div className="dark:bg-lightgrey dark:text-[#FFFFFF] pb-20">
      <div className="container py-24 ">
        <div className="flex w-[70%] mx-auto">
          <p className="text-[2.6rem] font-medium text-right">
            {siteData.footer.header}
          </p>

          <div className="flex flex-col flex-none pl-16 text-2xl font-medium">
            <a href="/" className="text-darkblue dark:text-lightblue">
              Github
            </a>
            <a href="/" className="text-black dark:text-[#FFFFFF]">
              Personal Blog
            </a>
            <a href="/" className="text-ocean dark:text-linkedinblue">
              Linkedin
            </a>
            <a href="/" className="text-cherry2 dark:text-pink">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

const Footer = () => {
  const { siteData } = useContext(LanguageContext);
  return (
    <div className="dark:bg-lightgrey dark:text-[#FFFFFF] pb-20">
      <div className="container py-24 ">
        <div className="flex w-[70%] md:flex-col mx-auto sm:w-[100%]">
          <p className="text-[2.6rem] font-medium text-right md:text-center sm:text-[2rem] sm:pb-4">
            {siteData.footer.header}
          </p>

          <div className="flex flex-col justify-center flex-none pl-16 text-2xl font-medium md:items-center md:p-0">
            <a
              href="https://github.com/alprdmrc"
              target="_blank"
              className="text-darkblue dark:text-lightblue"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="/"
              target="_blank"
              className="text-black dark:text-[#FFFFFF]"
            >
              Personal Blog
            </a>
            <a
              href="https://www.linkedin.com/in/alperfdemirci/"
              target="_blank"
              className="text-ocean dark:text-linkedinblue"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              href="mailto: alprdmrc20@gmail.com"
              target="_blank"
              className="text-cherry2 dark:text-pink"
              rel="noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

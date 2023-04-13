import React, { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

const Profile = () => {
  const { siteData } = useContext(LanguageContext);
  return (
    <div className="bg-silver dark:bg-darkgrey dark:text-[#FFFFFF] py-20">
      <div className="container flex flex-wrap">
        <h2 className="text-4xl font-medium w-full text-center pb-9">
          {siteData.profile.header}
        </h2>
        <div className="px-4 w-1/2">
          <div className="p-10 bg-[#FFFFFF] dark:bg-shadow rounded-[12px] shadow-[9px_9px_#52525280]">
            <h5 className="text-2xl font-playfairDisplay text-pink pb-8">
              {siteData.profile.basicInfo.header}
            </h5>

            <table className="table-fixed text-[18px]">
              <tbody className="align-top">
                {siteData.profile.basicInfo.info.map((info) => {
                  return (
                    <tr className="border-[#FFFFFF] dark:border-shadow border-b-8">
                      <td className="font-semibold w-2/5">{info[0]}</td>
                      <td>{info[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="px-4 w-1/2">
          <div className="py-10 px-6">
            <h5 className="text-2xl font-playfairDisplay text-coal dark:text-[#FFFFFF] pb-5">
              {siteData.profile.aboutMe.header}
            </h5>
            <p className="text-[18px] pb-6">
              {siteData.profile.aboutMe.aboutP1}
            </p>
            <p className="text-[18px]">{siteData.profile.aboutMe.aboutP2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

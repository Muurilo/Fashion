import React from "react";
import {
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialVimeo,
  TiSocialDribbble,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialGooglePlus,
} from "react-icons/ti";
import { SiBehance } from "react-icons/si";

const SocialInfo: React.FC = () => {
  return (
    <div className="flex flex-wrap -mx-5 overflow-hidden sm:-mx-4 md:-mx-4 xl:-mx-4">
      <div className="flex items-center justify-center w-1/3 px-5 my-5 overflow-hidden h-1/3 sm:my-4 sm:px-4 sm:w-1/3 md:my-4 md:px-4 md:w-1/3 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
        <TiSocialFacebook className="w-10 h-10" color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/3 px-5 my-5 overflow-hidden h-1/3 sm:my-4 sm:px-4 sm:w-1/3 md:my-4 md:px-4 md:w-1/3 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
        <TiSocialPinterest className="w-10 h-10" color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/3 px-5 my-5 overflow-hidden h-1/3 sm:my-4 sm:px-4 sm:w-1/3 md:my-4 md:px-4 md:w-1/3 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
        <TiSocialVimeo className="w-10 h-10" color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/3 px-5 my-5 overflow-hidden h-1/3 sm:my-4 sm:px-4 sm:w-1/3 md:my-4 md:px-4 md:w-1/3 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
        <TiSocialDribbble className="w-10 h-10" color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/3 px-5 my-5 overflow-hidden h-1/3 sm:my-4 sm:px-4 sm:w-1/3 md:my-4 md:px-4 md:w-1/3 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
        <TiSocialTwitter className="w-10 h-10" color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/3 px-5 my-5 overflow-hidden h-1/3 sm:my-4 sm:px-4 sm:w-1/3 md:my-4 md:px-4 md:w-1/3 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
        <TiSocialInstagram className="w-10 h-10" color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/3 px-5 my-5 overflow-hidden h-1/3 sm:my-4 sm:px-4 sm:w-1/3 md:my-4 md:px-4 md:w-1/3 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
        <TiSocialYoutube className="w-10 h-10" color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/3 px-5 my-5 overflow-hidden h-1/3 sm:my-4 sm:px-4 sm:w-1/3 md:my-4 md:px-4 md:w-1/3 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
        <TiSocialGooglePlus className="w-10 h-10" color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/3 px-5 my-5 overflow-hidden h-1/3 sm:my-4 sm:px-4 sm:w-1/3 md:my-4 md:px-4 md:w-1/3 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
        <SiBehance className="w-10 h-10" color="#5A5A5A" />
      </div>
    </div>
  );
};

export default SocialInfo;

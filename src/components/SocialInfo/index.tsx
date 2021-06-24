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
    <div className="flex flex-wrap -mx-4 overflow-hidden">
      <div className="flex items-center justify-center w-1/2 h-10 px-4 my-4 overflow-hidden md:h-20 bg-background-social sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <TiSocialFacebook size={30} color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/2 px-4 my-4 overflow-hidden bg-background-social sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <TiSocialPinterest size={30} color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/2 px-4 my-4 overflow-hidden bg-background-social md:w-1/3 lg:w-1/3 xl:w-1/3">
        <TiSocialVimeo size={30} color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/2 h-10 px-4 my-4 overflow-hidden md:h-20 bg-background-social md:w-1/3 lg:w-1/3 xl:w-1/3">
        <TiSocialDribbble size={30} color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/2 px-4 my-4 overflow-hidden bg-background-social md:w-1/3 lg:w-1/3 xl:w-1/3">
        <TiSocialTwitter size={30} color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/2 px-4 my-4 overflow-hidden bg-background-social md:w-1/3 lg:w-1/3 xl:w-1/3">
        <SiBehance size={30} color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/2 h-10 px-4 my-4 overflow-hidden md:h-20 bg-background-social md:w-1/3 lg:w-1/3 xl:w-1/3">
        <TiSocialInstagram size={30} color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-1/2 px-4 my-4 overflow-hidden bg-background-social md:w-1/3 lg:w-1/3 xl:w-1/3">
        <TiSocialYoutube size={30} color="#5A5A5A" />
      </div>

      <div className="flex items-center justify-center w-full px-4 my-4 overflow-hidden bg-background-social md:w-1/3 lg:w-1/3 xl:w-1/3">
        <TiSocialGooglePlus size={30} color="#5A5A5A" />
      </div>
    </div>
  );
};

export default SocialInfo;

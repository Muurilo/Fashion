import React from "react";

interface ILogo {
  size: string;
}

const Logo = (props: ILogo) => {
  if (props.size === "small") {
    return (
      <a href="/" className="relative">
        <div className="absolute z-0 w-full h-2 opacity-30 bg-highlight bottom-1" />
        <h1
          className={`relative z-10 text-2xl font-bold uppercase font-pt-serif`}
        >
          Fashion
        </h1>
      </a>
    );
  } else if (props.size === "large") {
    return (
      <a href="/" className="relative">
        <div className="absolute z-0 w-full h-2 opacity-30 bg-highlight bottom-1" />
        <h1
          className={`relative z-10 text-4xl font-bold uppercase font-pt-serif`}
        >
          Fashion
        </h1>
      </a>
    );
  }
};

export default Logo;

import * as React from "react";

import AuthorCard from "../components/AuthorCard";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

//@ts-ignore
import FeaturedImg from "../images/featured.webp";

const IndexPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col overflow-hidden">
        <div className="relative flex flex-col items-center justify-center w-screen text-center h-80 md:h-1/2">
          <img
            src={FeaturedImg}
            className="object-cover w-full h-full"
            alt=""
          />
          <div className="absolute flex flex-col items-center content-center w-1/2 px-5 text-center md:bottom-0 lg:w-1/3 md:text-left md:items-start md:left-0 md:mx-44 md:mb-16">
            <p className="text-white uppercase font-pt-sans">Vehicle</p>
            <h1 className="text-2xl font-bold text-white md:text-4xl font-pt-serif md:break-words">
              One of Saturn’s largest rings may be newer than anyone
            </h1>
            <div className="flex flex-row mx-1 space-x-6 text-white font-pt-serif">
              <p>June 6, 2019</p>
              <p>By Rickie Baroch</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center overflow-hidden md:items-start md:justify-center lg:mx-44 md:flex-row">
          <div className="flex-grow w-full px-10 overflow-hidden md:px-4 sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
            <div className="flex flex-wrap -mx-6 overflow-hidden md:mx-0 md:justify-center md:items-center">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
          <div className="w-full px-6 my-6 overflow-hidden md:justify-center md:items-center md:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="flex items-center justify-center p-8 mb-16 text-center border-2 border-custom-border">
              <h1 className="text-2xl font-pt-serif text-text-primary">
                About the author
              </h1>
            </div>
            <AuthorCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;

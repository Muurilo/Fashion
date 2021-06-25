import * as React from "react";

import AuthorCard from "../components/AuthorCard";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Paginator from "../components/Paginator";
import PostCard from "../components/PostCard";
import SocialInfo from "../components/SocialInfo";

//@ts-ignore
import FeaturedImg from "../images/featured.webp";
//@ts-ignore
import SpotLight from "../images/spotlight.jpg";

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
        <div className="flex flex-col flex-wrap items-center justify-center overflow-hidden md:items-start md:justify-center md:flex-row">
          <div className="flex-grow w-full px-10 overflow-hidden md:px-4 sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
            <div className="flex flex-wrap items-center justify-center -mx-6 overflow-hidden md:mx-0 md:justify-center md:items-center">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <Paginator />
            </div>
          </div>
          <div className="w-full px-6 my-6 overflow-hidden md:justify-center md:items-center md:mx-10 lg:w-1/4 xl:w-1/4">
            <Divider title="About the author" />
            <AuthorCard />
            <Divider title="Featured posts" />
            <PostCard size="widget" />
            <PostCard size="widget" />
            <PostCard size="widget" />
            <Divider title="Social media" />
            <SocialInfo />
          </div>
        </div>
      </main>
      <footer className="flex flex-col items-center justify-center overflow-hidden mt-28">
        <Logo size="large" />
        <div className="flex flex-row items-center justify-center py-24 space-x-5 font-pt-sans text-text-secondary">
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Article</a>
          <a href="#">Contact</a>
          <a href="#">Purchase</a>
        </div>
        <small className="p-10 font-pt-sans text-text-secondary">&copy; Muurilo. All Right Reserved.</small>
      </footer>
    </>
  );
};

export default IndexPage;

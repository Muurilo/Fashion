import * as React from "react";
import { graphql } from "gatsby";

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

const IndexPage = ({ data }) => {
  const featuredDate = new Date(data.posts.nodes[0].date);
  console.log(data);
  return (
    <>
      <Header />
      <main className="flex flex-col overflow-hidden">
        <div className="relative flex flex-col items-center justify-center w-screen text-center h-80 md:h-1/2">
          <img
            src={data.posts.nodes[0].coverImage.url}
            className="object-cover w-full h-full max-h-[34rem]"
            alt=""
          />
          <div className="absolute flex flex-col items-center content-center w-1/2 px-5 text-center md:bottom-0 lg:w-1/3 md:text-left md:items-start md:left-0 md:mx-44 md:mb-16">
            <p className="text-white uppercase font-pt-sans">
              {data.posts.nodes[0].tags[0]}
            </p>
            <h1 className="text-2xl font-bold text-white md:text-4xl font-pt-serif md:break-words">
              {data.posts.nodes[0].title}
            </h1>
            <div className="flex flex-row mx-1 space-x-6 text-white font-pt-serif">
              <p>
                {featuredDate.toLocaleDateString("pt-BR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>By {data.posts.nodes[0].author.name}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center overflow-hidden md:items-start md:justify-center md:flex-row">
          <div className="flex-grow w-full px-10 overflow-hidden md:px-4 sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
            <div className="flex flex-wrap items-center justify-center -mx-6 overflow-hidden md:mx-0 md:justify-center md:items-center">
              {data.posts.nodes.map((post) => {
                return (
                  <PostCard
                    author={post.author.name}
                    banner={post.coverImage.url}
                    date={post.date}
                    tag={post.tags[0]}
                    title={post.title}
                  />
                );
              })}
              <Paginator />
            </div>
          </div>
          <div className="w-full px-6 my-6 overflow-hidden md:justify-center md:items-center md:mx-10 lg:w-1/4 xl:w-1/4">
            <Divider title="About the author" />
            <AuthorCard />
            <Divider title="Featured posts" />
            {data.featuredPosts.nodes.map((post) => {
              return (
                <PostCard
                  author={post.author.name}
                  banner={post.coverImage.url}
                  date={post.date}
                  tag={post.tags[0]}
                  title={post.title}
                  size="widget"
                />
              );
            })}
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
        <small className="p-10 font-pt-sans text-text-secondary">
          &copy; Muurilo. All Right Reserved.
        </small>
      </footer>
    </>
  );
};

export const query = graphql`
  query {
    posts: allGraphCmsPost(sort: { fields: date, order: DESC }) {
      nodes {
        title
        coverImage {
          url
        }
        tags
        date
        author {
          name
        }
      }
    }
    featuredPosts: allGraphCmsPost(sort: { fields: date, order: ASC }) {
      nodes {
        title
        coverImage {
          url
        }
        tags
        date
        author {
          name
        }
      }
    }
  }
`;

export default IndexPage;

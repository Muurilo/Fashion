import React from "react";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

//@ts-ignore
import PostImg from "../../images/postimage.jpg";

interface IPostCard {
  size?: string;
  banner: IGatsbyImageData;
  tag: string;
  title: string;
  date: string;
  author: string;
}

const PostCard = ({ size, banner, tag, title, date, author }: IPostCard) => {
  const PostDate = new Date(date);
  const PostImage = getImage(banner);

  if (size === "widget") {
    return (
      <article className="flex flex-col items-center justify-center w-auto h-auto mt-16 border-2 md:max-h-[25rem]">
        <GatsbyImage
          image={PostImage}
          className="object-cover w-full h-full"
          alt=""
        />
        <p className="p-2 text-lg uppercase font-pt-sans text-highlight">
          {tag}
        </p>
        <h1 className="mx-10 text-2xl text-center break-words font-pt-serif xl:mx-5 lg:mx-5 text-text-primary">
          {title}
        </h1>
        <div className="flex flex-row p-5 mx-1 space-x-6 font-pt-serif text-text-secondary">
          <p>
            {PostDate.toLocaleDateString("pt-BR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>
            <span className="text-text-other">By</span> {author}
          </p>
        </div>
      </article>
    );
  } else {
    return (
      <div className="w-full px-6 my-6 overflow-hidden text-center md:w-1/2">
        <article className="flex flex-col items-center justify-center w-auto h-auto border-2 md:max-h-[25rem]">
          <GatsbyImage
            image={PostImage}
            className="object-cover w-full h-full"
            alt=""
          />
          <p className="p-2 text-lg uppercase font-pt-sans text-highlight">
            {tag}
          </p>
          <h1 className="mx-10 text-2xl text-center break-words font-pt-serif text-text-primary">
            {title}
          </h1>
          <div className="flex flex-row p-5 mx-1 space-x-6 font-pt-serif text-text-secondary">
            <p>
              {PostDate.toLocaleDateString("pt-BR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>
              <span className="text-text-other">By</span> {author}
            </p>
          </div>
        </article>
      </div>
    );
  }
};

export default PostCard;

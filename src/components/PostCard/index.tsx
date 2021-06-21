import React from "react";

//@ts-ignore
import PostImg from "../../images/postimage.jpg";

interface IPostCard {
  size?: string;
}

const PostCard = ({ size }: IPostCard) => {
  if (size === "widget") {
    return (
        <article className="flex flex-col items-center justify-center w-auto h-auto mt-16 border-2">
          <img src={PostImg} className="w-full h-full" alt="" />
          <p className="p-2 text-lg uppercase font-pt-sans text-highlight">
            Tourism
          </p>
          <h1 className="mx-10 text-2xl text-center break-words font-pt-serif text-text-primary">
            One of Saturn’s largest rings may be newer than anyone
          </h1>
          <div className="flex flex-row p-5 mx-1 space-x-6 font-pt-serif text-text-secondary">
            <p>June 6, 2019</p>
            <p>
              <span className="text-text-other">By</span> Rickie Baroch
            </p>
          </div>
        </article>
    );
  } else {
    return (
      <div className="w-full px-6 my-6 overflow-hidden text-center md:w-1/2">
        <article className="flex flex-col items-center justify-center w-auto h-auto border-2">
          <img src={PostImg} className="w-full h-full" alt="" />
          <p className="p-2 text-lg uppercase font-pt-sans text-highlight">
            Tourism
          </p>
          <h1 className="mx-10 text-2xl text-center break-words font-pt-serif text-text-primary">
            One of Saturn’s largest rings may be newer than anyone
          </h1>
          <div className="flex flex-row p-5 mx-1 space-x-6 font-pt-serif text-text-secondary">
            <p>June 6, 2019</p>
            <p>
              <span className="text-text-other">By</span> Rickie Baroch
            </p>
          </div>
        </article>
      </div>
    );
  }
};

export default PostCard;

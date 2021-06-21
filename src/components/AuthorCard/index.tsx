import React from "react";

//@ts-ignore
import AuthorImg from "../../images/author.jpg";

const AuthorCard: React.FC = () => {
  return (
    <article className="flex flex-col items-center justify-center w-auto h-auto text-center border-2">
      <img src={AuthorImg} className="object-cover w-full h-full" alt="" />
      <div className="p-5">
        <h1 className="text-xl font-bold text-text-primary font-pt-serif">
          Kate Willems
        </h1>
        <h2 className="italic font-pt-serif text-text-other">
          Food &amp; cooking bloger
        </h2>
        <p className="text-center font-pt-sans text-text-secondary">
          Hi, I'm Sonia. Cooking is the way I express my creative side to the
          world. Welcome to my Kitchen Corner on…
        </p>
      </div>
      <a
        className="w-full p-5 uppercase border-t-2 text-highlight font-pt-serif"
        href="#"
      >
        Continue Reading
      </a>
    </article>
  );
};

export default AuthorCard;

import React from "react";

//@ts-ignore
import AuthorImg from "../../images/author.jpg";

interface IAuthor {
  name: string;
  title: string;
  bio: string;
  banner: string;
}

const AuthorCard = ({ banner, bio, name, title }: IAuthor) => {
  return (
    <article className="flex flex-col items-center justify-center w-auto h-auto mb-16 text-center border-2">
      <img src={banner} className="object-cover w-full h-full" alt="" />
      <div className="p-5">
        <h1 className="text-xl font-bold text-text-primary font-pt-serif">
          {name}
        </h1>
        <h2 className="italic font-pt-serif text-text-other">{title}</h2>
        <p className="text-center font-pt-sans text-text-secondary">{bio}</p>
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

import React from "react";

interface IDivider {
  title: string;
}

const Divider = ({ title }: IDivider) => {
  return (
    <div className="flex items-center justify-center p-8 mt-16 mb-16 text-center border-2 border-custom-border">
      <h1 className="text-2xl font-pt-serif text-text-primary">
        {title}
      </h1>
    </div>
  );
};

export default Divider;

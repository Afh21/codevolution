import React from "react";

const Hero = ({ name }) => {
  if (name === "Joker") throw new Error(`${name} isn't Hero`);
  return <div>{name}</div>;
};

export { Hero };

import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
};

export const CardStory = () => {
  return (
    <Card
      image="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png"
      score={1}
    />
  );
};

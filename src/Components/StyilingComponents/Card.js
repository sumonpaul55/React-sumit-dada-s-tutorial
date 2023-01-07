import React from "react";
import thumbsup from "./../../img/thumbsup.png";
import ButtonStyled from "./ButtonStyled";
import Content from "./Content";
import Image from "./Image";
import Tag from "./Tag";

const Card = () => {
  return (
    <div className="card">
      <Content>
        <Tag text="EXCLUSIVE" />
        <h1>React Styled Components</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis est temporibus accusamus architecto doloribus ullam.</p>
        <div className="buttons">
          <ButtonStyled text="Watch now" />
          <ButtonStyled text="Github Repo" />
        </div>
      </Content>
      <Image Imgsrc={thumbsup} altText="Thumbs up img" width="300px" />
    </div>
  );
};

export default Card;

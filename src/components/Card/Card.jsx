import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.style";
import Button from "../Button/Button";

const Card = ({ image, score }) => {
  return (
    <S.CardContainer>
      <S.Image src={image} />
      <h5>Team Score: {score}</h5>
      <Button color="primary">+</Button>
      <Button color="secondary">-</Button>
    </S.CardContainer>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Card;

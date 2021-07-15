import React from "react";
import PropTypes from "prop-types";
import * as S from "./Form.style";
import Button from "../Button/Button";
import AlignButton from "../AlignButton/AlignButton";

const Form = ({ form_type, userValidation }) => {
  return (
    <>
      <S.Form onSubmit={userValidation}>
        {form_type === "register" && (
          <S.Input
            type="text"
            name="name"
            minLength="2"
            maxLength="255"
            placeholder="First Name"
            required
          ></S.Input>
        )}
        <S.Input
          type="email"
          name="email"
          minLength="4"
          maxLength="255"
          placeholder="email@email.com"
          required
        ></S.Input>
        <S.Input
          type="password"
          name="password"
          minLength="8"
          maxLength="255"
          placeholder="Password"
          required
        />
        <AlignButton>
          <Button color="primary" type="submit">
            {form_type}
          </Button>
        </AlignButton>
      </S.Form>
    </>
  );
};

Form.propTypes = {
  form_type: PropTypes.oneOf(["login", "register"]).isRequired,
  userValidation: PropTypes.func,
};

export default Form;

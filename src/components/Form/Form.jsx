import React from "react";
import PropTypes from "prop-types";
import * as S from "./Form.style";
import Button from "../Button/Button";
import AlignButton from "../AlignButton/AlignButton";

const Form = ({ form_type }) => {
  return (
    <>
      <S.Form>
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
          <Button color="primary">{form_type}</Button>
        </AlignButton>
      </S.Form>
    </>
  );
};

Form.propTypes = {
  form_type: PropTypes.oneOf(["Login", "Register"]).isRequired,
};

export default Form;

import React from "react";
import PropTypes from "prop-types";
import * as S from "./PageTitle.style";

const PageTitle = ({ children }) => {
  return (
    <>
      <S.PageTitle>{children}</S.PageTitle>
    </>
  );
};

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageTitle;

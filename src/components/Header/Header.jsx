import React from "react";
import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <S.StyledLink to="/dashboard">Dashboard</S.StyledLink>
        <S.StyledLink to="/register">Register</S.StyledLink>
        <S.StyledLink to="/">Login</S.StyledLink>
      </S.Nav>
    </S.Header>
  );
};

export default Header;

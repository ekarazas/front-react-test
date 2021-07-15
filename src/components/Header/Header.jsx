import React from "react";
import * as S from "./Header.style";

const Header = () => {
  const logOut = () => {
    localStorage.removeItem("token");
  };

  if (localStorage.getItem("token")) {
    return (
      <S.Header>
        <S.Nav>
          <S.StyledLink to="/" onClick={logOut}>
            Log out
          </S.StyledLink>
        </S.Nav>
      </S.Header>
    );
  }

  return (
    <S.Header>
      <S.Nav>
        <S.StyledLink to="/register">Register</S.StyledLink>
        <S.StyledLink to="/">Login</S.StyledLink>
      </S.Nav>
    </S.Header>
  );
};

export default Header;

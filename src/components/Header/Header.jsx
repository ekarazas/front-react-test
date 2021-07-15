import React, { useContext } from "react";
import { LoggedInContext } from "../../contexts/loggedInContext";
import * as S from "./Header.style";

const Header = () => {
  const loggedInContext = useContext(LoggedInContext);

  const logOut = () => {
    loggedInContext.setLoggedIn(false);
    localStorage.removeItem("token");
  };

  if (loggedInContext.loggedIn) {
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

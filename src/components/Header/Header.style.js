import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background: #ebebe8;
  border-bottom: 0.05rem solid #1a1919;
`;

export const Nav = styled.nav`
  padding: 1rem 0.5rem;
  margin: 0 auto;
  text-align: center;

  @media only screen and (min-width: 375px) {
    max-width: 785px;
    text-align: right;
  }
`;

export const StyledLink = styled(Link)`
  color: #1a1919;
  padding: 0.5rem;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  @media only screen and (min-width: 785px) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

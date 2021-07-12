import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.color === "primary" ? "#008a07" : "#9d9d9f")};
  border: 0;
  border-radius: 0.2rem;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 1.2rem;

  &:hover {
    background: ${(props) =>
      props.color === "primary" ? "#09530c" : "#616161"};
  }
`;

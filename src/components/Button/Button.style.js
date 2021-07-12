import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.color === "primary" ? "#198bd2" : "#938d5a")};
  border: 0;
  border-radius: 0.2rem;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;

  &:hover {
    background: ${(props) =>
      props.color === "primary" ? "#1b70a5" : "#7c7646"};
  }
`;

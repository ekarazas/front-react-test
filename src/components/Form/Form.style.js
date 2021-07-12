import styled from "styled-components";

export const Form = styled.form`
  box-sizing: border-box;
`;

export const Input = styled.input`
  border: 0.05rem solid #6f9392;
  border-radius: 0.3rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    border: 0.05rem solid #37d5d3;
  }
`;

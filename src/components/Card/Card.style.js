import styled from "styled-components";

export const CardContainer = styled.div`
  box-sizing: border-box;
  border: 0.05rem solid #999;
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  text-align: center;
  width: calc(33.33% - 2rem / 3);

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: 10rem;
  object-fit: cover;
`;

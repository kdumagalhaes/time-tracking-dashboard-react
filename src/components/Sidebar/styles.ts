import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  height: 100%;
  max-width: 255px;
  display: flex;
  flex-direction: column;
  margin-right: 29px;
  position: relative;

  @media (max-width: 480px) {
    max-width: 100%;
    margin-top: 80px;
    height: 250px;
  }
`;

import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  max-height: 515px;
  display: grid;
  grid-template-columns: repeat(3, 255px);
  gap: 30px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 255px);
  }

  @media (max-width: 768px) {
    grid-template-columns: 255px;
  }

  @media (max-width: 480px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 29px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 515px;
  max-width: 1150px;
  padding: 0 20px;
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
  }
`;

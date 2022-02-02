import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  height: 100%;
  max-width: 255px;
  display: flex;
  flex-direction: column;
  margin-right: 29px;

  @media (max-width: 480px) {
    max-width: 100%;
    padding: var(--safe-area-padding);
    margin-top: 80px;
  }
`;

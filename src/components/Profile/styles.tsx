import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 355px;
  max-width: 255px;
  background: var(--primary-blue);
  border-radius: var(--border-radius);
  padding: 35px 29px 29px 29px;
  z-index: 1;

  @media (max-width: 480px) {
    display: flex;
    max-width: 100%;
    height: auto;
    display: flex;
    align-items: center;
  }

  .profile-pic {
    width: 100%;
    max-width: 85px;
    border-radius: 100%;
    border: 3px solid #fff;
    margin-bottom: 35px;

    @media (max-width: 480px) {
      max-width: 75px;
      margin: 0 15px 0 0;
    }
  }

  p {
    font-size: 0.9rem;
    color: var(--neutral-pale-blue);
    margin-bottom: 4px;

    @media (max-width: 480px) {
      margin-bottom: 0;
    }
  }

  .profile-name {
    font-weight: 300;
    font-size: 2.5rem;
    color: #fff;
    line-height: 3rem;

    @media (max-width: 480px) {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
`;

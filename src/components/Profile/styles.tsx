import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 355px;
  background: var(--primary-blue);
  border-radius: var(--border-radius);
  padding: 29px;

  .profile-pic {
    width: 100%;
    max-width: 85px;
    border-radius: 100%;
    border: 3px solid #fff;
    margin-bottom: 35px;
  }

  p {
    font-size: 0.9rem;
    color: var(--neutral-pale-blue);
    margin-bottom: 7px;
  }

  .profile-name {
    font-weight: 300;
    font-size: 2.5rem;
    color: #fff;
    line-height: 2.8rem;
  }
`;

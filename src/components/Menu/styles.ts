import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--neutral-dark-blue);
  padding: 40px 31px 31px 31px;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  position: relative;
  top: -7px;
  z-index: 0;

  @media (max-width: 480px) {
    padding-bottom: 0;
    margin-bottom: 20px;
  }

  .menu-list {
    @media (max-width: 480px) {
      display: flex;
      justify-content: space-between;
    }

    li {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        color: var(--neutral-desaturated-blue);
        text-decoration: none;
        transition: color 0.3s;
        font-size: 1.15rem;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

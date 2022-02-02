import styled from "styled-components";
import { lighten } from "polished";

interface Props {
  headerBgColor?: string;
  headerIcon?: string;
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 100%;
  max-width: 255px;
  max-height: 350px;
  cursor: pointer;
  margin-bottom: 50px;
  position: relative;

  @media (max-width: 480px) {
    max-width: 100%;

    .time-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .header-bg {
    width: 100%;
    height: 70px;
    background-color: ${({ headerBgColor }) => headerBgColor};
    background-image: ${({ headerIcon }) => `url(${headerIcon})`};
    background-repeat: no-repeat;
    background-position-x: 160px;
    background-position-y: -10px;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    position: absolute;

    @media (max-width: 480px) {
      background-position-x: 240px;
      background-position-y: -10px;
    }
  }

  .horizontal-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .category {
    font-size: 1.15rem;
    font-weight: 500;
  }

  .options-link {
    text-decoration: none;
    color: var(--neutral-pale-blue);
    font-size: 1.2rem;
  }

  .time-spent {
    font-size: 3.7rem;
    font-weight: 300;
    margin-bottom: 10px;

    @media (max-width: 480px) {
      font-size: 2.1rem;
    }
  }

  .text-content {
    color: #fff;
    width: 100%;
    background: var(--neutral-dark-blue);
    border-radius: var(--border-radius);
    padding: 29px;
    transition: background 0.3s;
    position: relative;
    top: 50px;

    &:hover {
      background: ${lighten(0.2, "hsl(235, 46%, 20%)")};
    }

    @media (max-width: 480px) {
      top: 40px;
    }

    .last-week {
      color: var(--neutral-pale-blue);
      font-weight: 300;
      font-size: 1.02rem;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }
`;

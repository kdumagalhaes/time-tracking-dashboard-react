import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 255px;
  max-height: 350px;
  position: absolute;
  z-index: 0;
  cursor: pointer;

  .header-bg {
    width: 100%;
    height: 70px;
    background-color: var(--primary-orange);
    background-image: url("src/img/icon-work.svg");
    background-repeat: no-repeat;
    background-position-x: 160px;
    background-position-y: -10px;
    position: relative;
    top: 20px;
    z-index: 1;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .horizontal-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
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
  }

  .text-content {
    color: #fff;
    width: 100%;
    background: var(--neutral-dark-blue);
    border-radius: var(--border-radius);
    padding: 29px;
    position: relative;
    z-index: 2;
    transition: background 0.3s;

    &:hover {
      background: ${lighten(0.2, "hsl(235, 46%, 20%)")};
    }

    .last-week {
      color: var(--neutral-pale-blue);
      font-weight: 300;
      font-size: 1.02rem;
    }
  }
`;

import { Container } from "./styles";
import { changeTimeframe } from "../../store/store";
import { useAppDispatch } from "../../hooks/hooks";

export const Menu = () => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <ul className="menu-list">
        <li>
          <a onClick={() => dispatch(changeTimeframe("daily"))} href="#">
            Daily
          </a>
        </li>
        <li>
          <a onClick={() => dispatch(changeTimeframe("weekly"))} href="#">
            Weekly
          </a>
        </li>
        <li>
          <a onClick={() => dispatch(changeTimeframe("monthly"))} href="#">
            Monthly
          </a>
        </li>
      </ul>
    </Container>
  );
};

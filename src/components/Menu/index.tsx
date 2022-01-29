import { Container } from "./styles";

export const Menu = () => {
  return (
    <Container>
      <ul className="menu-list">
        <li>
          <a href="#">Daily</a>
        </li>
        <li>
          <a href="#">Weekly</a>
        </li>
        <li>
          <a href="#">Monthly</a>
        </li>
      </ul>
    </Container>
  );
};

import { Container } from "./styles";

// components
import { Profile } from "../Profile/index";
import { Menu } from "../Menu";

export const Sidebar = () => {
  return (
    <Container>
      <Profile imgSrc="src/img/image-jeremy.png" name="Jeremy Robson" />
      <Menu />
    </Container>
  );
};

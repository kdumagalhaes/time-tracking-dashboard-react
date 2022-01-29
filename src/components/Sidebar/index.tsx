import { Container } from "./styles";

import userImg from "../../img/image-jeremy.png";

// components
import { Profile } from "../Profile/index";
import { Menu } from "../Menu";

export const Sidebar = () => {
  return (
    <Container>
      <Profile imgSrc={userImg} name="Jeremy Robson" />
      <Menu />
    </Container>
  );
};

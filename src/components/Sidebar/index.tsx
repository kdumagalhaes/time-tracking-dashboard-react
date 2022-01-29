import { Container } from "./styles";

// components
import { Profile } from "../Profile/index";

export const Sidebar = () => {
  return (
    <Container>
      <Profile
        imgSrc="src/components/img/image-jeremy.png"
        name="Jeremy Robson"
      />
    </Container>
  );
};

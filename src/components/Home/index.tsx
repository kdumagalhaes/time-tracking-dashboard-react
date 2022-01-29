import { Container } from "./styles";

// components
import { Sidebar } from "../Sidebar/index";
import { TimeTrackingBoard } from "../TimeTrackingBoard/index";

export const Home = () => {
  return (
    <Container>
      <Sidebar />
      <TimeTrackingBoard />
    </Container>
  );
};

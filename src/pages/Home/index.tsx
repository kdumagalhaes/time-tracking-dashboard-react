import { Container } from "./styles";

// components
import { Sidebar } from "../../components/Sidebar/index";
import { TimeTrackingBoard } from "../../components/TimeTrackingBoard/index";

export const Home = () => {
  return (
    <Container>
      <Sidebar />
      <TimeTrackingBoard />
    </Container>
  );
};

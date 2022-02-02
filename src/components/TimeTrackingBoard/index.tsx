import { Container } from "./styles";

// components
import { TimeTrackingCard } from "../TimeTrackingCard/index";

export const TimeTrackingBoard = () => {
  return (
    <Container>
      <TimeTrackingCard category="Work" />
      <TimeTrackingCard category="Play" />
      <TimeTrackingCard category="Study" />
      <TimeTrackingCard category="Exercise" />
      <TimeTrackingCard category="Social" />
      <TimeTrackingCard category="Self Care" />
    </Container>
  );
};

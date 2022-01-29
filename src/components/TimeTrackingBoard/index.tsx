import { Container } from "./styles";

// components
import { TimeTrackingCard } from "../TimeTrackingCard/index";

export const TimeTrackingBoard = () => {
  return (
    <Container>
      <TimeTrackingCard timeSpent="32" category="Work" lastWeekTimeSpent="36" />
      <TimeTrackingCard timeSpent="10" category="Play" lastWeekTimeSpent="8" />
      <TimeTrackingCard timeSpent="4" category="Study" lastWeekTimeSpent="7" />
      <TimeTrackingCard
        timeSpent="4"
        category="Exercise"
        lastWeekTimeSpent="5"
      />
      <TimeTrackingCard
        timeSpent="5"
        category="Social"
        lastWeekTimeSpent="10"
      />
      <TimeTrackingCard
        timeSpent="2"
        category="Self Care"
        lastWeekTimeSpent="2"
      />
    </Container>
  );
};

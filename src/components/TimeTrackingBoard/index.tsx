import { Container } from "./styles";

// components
import { TimeTrackingCard } from "../TimeTrackingCard/index";

export const TimeTrackingBoard = () => {
  return (
    <Container>
      <TimeTrackingCard timeSpent="32" category="Work" lastWeekTimeSpent="36" />
      <TimeTrackingCard timeSpent="32" category="Work" lastWeekTimeSpent="36" />
      <TimeTrackingCard timeSpent="32" category="Work" lastWeekTimeSpent="36" />
      <TimeTrackingCard timeSpent="32" category="Work" lastWeekTimeSpent="36" />
      <TimeTrackingCard timeSpent="32" category="Work" lastWeekTimeSpent="36" />
      <TimeTrackingCard timeSpent="32" category="Work" lastWeekTimeSpent="36" />
    </Container>
  );
};

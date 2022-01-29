import { Container } from "./styles";

interface TimeTrackingCardProps {
  category: string;
  timeSpent: string;
  lastWeekTimeSpent: string;
}

export const TimeTrackingCard = ({
  category,
  timeSpent,
  lastWeekTimeSpent,
}: TimeTrackingCardProps) => {
  return (
    <Container>
      <div className="header-bg"></div>
      <div className="text-content">
        <div className="horizontal-container">
          <p className="category">{category}</p>
          <a href="#" className="options-link">
            •••
          </a>
        </div>
        <h2 className="time-spent">{timeSpent}hrs</h2>
        <p className="last-week">Last Week - {lastWeekTimeSpent}hrs</p>
      </div>
    </Container>
  );
};

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
  let bgColor: string | undefined;
  let icon: string | undefined;

  switch (category) {
    case "Work":
      bgColor = "var(--primary-orange)";
      icon = "../../src/img/icon-work.svg";
      break;

    case "Play":
      bgColor = "var(--primary-soft-blue)";
      icon = "../../src/img/icon-play.svg";
      break;

    case "Study":
      bgColor = "var(--primary-pink)";
      icon = "../../src/img/icon-study.svg";
      break;

    case "Exercise":
      bgColor = "var(--primary-green)";
      icon = "../../src/img/icon-exercise.svg";
      break;

    case "Social":
      bgColor = "var(--primary-violet)";
      icon = "../../src/img/icon-social.svg";
      break;

    case "Self Care":
      bgColor = "var(--primary-yellow)";
      icon = "icon-self-care.svg";
      break;

    default:
      break;
  }

  const convertedTimeSpent: number = parseInt(timeSpent);
  const convertedLastWeek: number = parseInt(lastWeekTimeSpent);
  let hoursTextTimeSpent: string = convertedTimeSpent <= 1 ? "hr" : "hrs";
  let hoursTextLastWeek: string = convertedLastWeek <= 1 ? "hr" : "hrs";

  return (
    <Container headerBgColor={bgColor} headerIcon={icon}>
      <div className="header-bg"></div>
      <div className="text-content">
        <div className="horizontal-container">
          <p className="category">{category}</p>
          <a href="#" className="options-link">
            •••
          </a>
        </div>
        <h2 className="time-spent">
          {timeSpent}
          {hoursTextTimeSpent}
        </h2>
        <p className="last-week">
          Last Week - {lastWeekTimeSpent}
          {hoursTextLastWeek}
        </p>
      </div>
    </Container>
  );
};

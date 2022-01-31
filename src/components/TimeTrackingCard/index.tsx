import { Container } from "./styles";

// assets
import exerciseIcon from "../../img/icon-exercise.svg";
import playIcon from "../../img/icon-play.svg";
import selfCareIcon from "../../img/icon-self-care.svg";
import socialIcon from "../../img/icon-social.svg";
import studyIcon from "../../img/icon-study.svg";
import workIcon from "../../img/icon-work.svg";

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
      icon = workIcon;
      break;

    case "Play":
      bgColor = "var(--primary-soft-blue)";
      icon = playIcon;
      break;

    case "Study":
      bgColor = "var(--primary-pink)";
      icon = studyIcon;
      break;

    case "Exercise":
      bgColor = "var(--primary-green)";
      icon = exerciseIcon;
      break;

    case "Social":
      bgColor = "var(--primary-violet)";
      icon = socialIcon;
      break;

    case "Self Care":
      bgColor = "var(--primary-yellow)";
      icon = selfCareIcon;
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

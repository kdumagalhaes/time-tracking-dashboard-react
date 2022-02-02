import { Container } from "./styles";
import { useAppSelector } from "../../hooks/hooks";

// assets
import exerciseIcon from "../../img/icon-exercise.svg";
import playIcon from "../../img/icon-play.svg";
import selfCareIcon from "../../img/icon-self-care.svg";
import socialIcon from "../../img/icon-social.svg";
import studyIcon from "../../img/icon-study.svg";
import workIcon from "../../img/icon-work.svg";

// utils
import data from "../../utils/data.json";

interface TimeTrackingCardProps {
  category: string;
}

export const TimeTrackingCard = ({ category }: TimeTrackingCardProps) => {
  const timeframe = useAppSelector((state) => state.timeframe.timeframe);
  let bgColor: string | undefined;
  let icon: string | undefined;
  let currentTimeframe: string = timeframe;
  let timeSpentData!: number;
  let lastWeekTimeSpentData!: number;
  let categoryIndex!: number;
  // const currentTimeframe = useSelector((state) => state);

  switch (category) {
    case "Work":
      bgColor = "var(--primary-orange)";
      icon = workIcon;
      categoryIndex = 0;
      break;

    case "Play":
      bgColor = "var(--primary-soft-blue)";
      icon = playIcon;
      categoryIndex = 1;
      break;

    case "Study":
      bgColor = "var(--primary-pink)";
      icon = studyIcon;
      categoryIndex = 2;
      break;

    case "Exercise":
      bgColor = "var(--primary-green)";
      icon = exerciseIcon;
      categoryIndex = 3;
      break;

    case "Social":
      bgColor = "var(--primary-violet)";
      icon = socialIcon;
      categoryIndex = 4;
      break;

    case "Self Care":
      bgColor = "var(--primary-yellow)";
      icon = selfCareIcon;
      categoryIndex = 5;
      break;

    default:
      break;
  }

  switch (currentTimeframe) {
    case "daily":
      timeSpentData = data[categoryIndex].timeframes.daily.current;
      lastWeekTimeSpentData = data[categoryIndex].timeframes.daily.previous;
      break;

    case "weekly":
      timeSpentData = data[categoryIndex].timeframes.weekly.current;
      lastWeekTimeSpentData = data[categoryIndex].timeframes.weekly.previous;
      break;

    case "monthly":
      timeSpentData = data[categoryIndex].timeframes.monthly.current;
      lastWeekTimeSpentData = data[categoryIndex].timeframes.monthly.previous;
      break;

    default:
      break;
  }

  let hoursTextTimeSpent: string = timeSpentData <= 1 ? "hr" : "hrs";
  let hoursTextLastWeek: string = lastWeekTimeSpentData <= 1 ? "hr" : "hrs";

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
          {timeSpentData}
          {hoursTextTimeSpent}
        </h2>
        <p className="last-week">
          Last Week - {lastWeekTimeSpentData}
          {hoursTextLastWeek}
        </p>
      </div>
    </Container>
  );
};

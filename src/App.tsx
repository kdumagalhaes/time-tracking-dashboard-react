import { GlobalStyle } from "./css/global";

// components
import { Sidebar } from "./components/Sidebar/index";
import { TimeTrackingCard } from "./components/TimeTrackingCard/index";

const App = () => {
  return (
    <>
      <Sidebar />
      <TimeTrackingCard category="Work" timeSpent="32" lastWeekTimeSpent="36" />
      <GlobalStyle />
    </>
  );
};

export default App;

import { GlobalStyle } from "./css/global";

// components
import { Sidebar } from "./components/Sidebar/index";
import { TimeTrackingBoard } from "./components/TimeTrackingBoard";

const App = () => {
  return (
    <>
      <Sidebar />
      <TimeTrackingBoard />
      <GlobalStyle />
    </>
  );
};

export default App;

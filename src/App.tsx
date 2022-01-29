import { GlobalStyle } from "./css/global";

// components
import { Sidebar } from "./components/Sidebar/index";

const App = () => {
  return (
    <div>
      <Sidebar />
      <GlobalStyle />
    </div>
  );
};

export default App;

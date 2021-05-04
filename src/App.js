import logo from "./logo.svg";
import "./App.css";
import RouterLinks from "./RouterLinks";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <RouterLinks />
      </div>
    </Router>
  );
}

export default App;

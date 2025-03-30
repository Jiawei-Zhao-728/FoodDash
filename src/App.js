import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Home />
      </div>
    </Router>
  );
}

export default App;

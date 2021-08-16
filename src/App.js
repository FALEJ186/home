import "./Background.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Navbar from "./navbar/Navbar.js";
import Timeline from "./timeline/Timeline.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      
    </div>
  );
}

export default App;

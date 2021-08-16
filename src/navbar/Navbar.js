import Dropwdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import "./Navbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Timeline from "../timeline/Timeline.js";

function Navbar() {
  return (
    <main
      id="check"
      style={{
        marginTop:"1%",
        height: "100%",
        background:
          "radial-gradient(ellipse at bottom, #295f9c 0%, #090a0f 100%)",
        overflow: "hidden",
      }}
    >
      <Router>
        <nav className="navbar navbar-light" id="top">
          <span
            className="badge rounded-pill even-larger-badge"
            style={{ marginLeft: "8%" }}
          >
            Frederick Alejandro
          </span>
          <NavLink
            className="badge rounded-pill even-larger-badge"
            exact
            to="/"
            style={{ marginLeft: "15%" }}
          >
            Home
          </NavLink>
          <NavLink
            className="badge rounded-pill even-larger-badge"
            to="/resume"
            style={{ marginLeft: "-12%" }}
          >
            Resume
          </NavLink>
          <NavLink
            className="badge rounded-pill even-larger-badge"
            to="/projects"
            style={{ marginLeft: "-12%", marginRight: "15%" }}
          >
            Projects
          </NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Timeline />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default Navbar;

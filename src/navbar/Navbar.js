import Dropwdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import "./Navbar.css";
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar">
          <div className="container">
            <Router>
              
              <div id="title">Frederick Alejandro</div>

            </Router>
          </div>
        </nav>
    )
    
}

export default Navbar;
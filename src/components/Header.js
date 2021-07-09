import { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav>
                <h1 id="title">Stephen A. Roddewig</h1>
                <ul className="header">
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-me">Contact Me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume">Resume</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
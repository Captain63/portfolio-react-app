import { Component } from "react";
import Project from "./Project";

const projects = [
    {
       name: "Test",
       gitLink: "test",
       liveLink: "test",
       screenshotPath: "test"
    }
]

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Projects</h2>
                <Project project={projects} />
            </div>
        );
    }
}

export default Projects;
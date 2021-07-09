import { Component } from "react";
import Project from "../Project";

const projectArray = [
    {
       name: "Tech Blog",
       gitLink: "https://github.com/Captain63/tech-blog",
       liveLink: "https://stephentechblog.com/",
       screenshotPath: "/assets/images/tech-blog-750px.png"
    },
    {
        name: "OpenWeather Dashboard",
        gitLink: "https://github.com/Captain63/weather-dashboard",
        liveLink: "https://weather.stephentechblog.com/",
        screenshotPath: "/assets/images/openweather-dashboard-750px.png"
    },
    {
        name: "Work Day Scheduler Application",
        gitLink: "https://github.com/Captain63/work-day-scheduler",
        liveLink: "https://captain63.github.io/work-day-scheduler/",
        screenshotPath: "/assets/images/work-day-scheduler-750px.png"
    },
    {
        name: "Code Quiz Application",
        gitLink: "https://github.com/Captain63/code-quiz",
        liveLink: "https://captain63.github.io/code-quiz/",
        screenshotPath: "/assets/images/code-quiz-750px.png"
    },
    {
        name: "Satellite Locator Application",
        gitLink: "https://github.com/Captain63/satellite-tracker",
        liveLink: null,
        screenshotPath: "/assets/images/satellite-locator-750px.png"
    },
]

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Projects</h2>
                <div className="container">
                    <div className="row">
                        <Project project={projectArray} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
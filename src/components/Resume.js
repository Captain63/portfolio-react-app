import { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>My Resume</h2>
                <p>View <strong><a href="/portfolio-react-app/assets/files/Stephen-Roddewig-Developer-Resume.pdf" target="_blank" rel="noreferrer">
                    my full resume</a></strong>.</p>
                <h3>Languages</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SQL</li>
                    <li>Git</li>
                </ul>
                <h3>Tools</h3>
                <ul>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Handlebars</li>
                </ul>
            </div>
        );
    }
}

export default Contact;
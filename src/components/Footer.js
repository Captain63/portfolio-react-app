import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <h3>Get In Touch</h3>
                    <section className="contact-info">
                        <div id="phone">
                            (571) 438-8281
                        </div>
                        
                        <div id="email">
                            <i className="far fa-envelope"></i>
                            <a href="mailto:stephen.a.rodd@gmail.com">stephen.a.rodd<br />@gmail.com</a>
                        </div>

                        <div id="github">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/Captain63" target="_blank" rel="noreferrer">GitHub profile</a>
                        </div>

                        <div id="linkedin">
                            <i className="fab fa-linkedin"></i>
                            <a href="https://www.linkedin.com/in/stephen-roddewig/" target="_blank" rel="noreferrer">LinkedIn profile</a>
                        </div>
                    </section>
            </footer>
        );
    }
}

export default Footer;
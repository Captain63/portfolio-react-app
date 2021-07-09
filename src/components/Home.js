import { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div className="about-content">
                <h2>About Me</h2>
                <div>
                    <h3>My Skills</h3>
                    <p>
                        <u>Languages</u>: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, Git
                    </p>
                    <p>
                        <u>Tools</u>: Bootstrap, jQuery, Express, React, Node, Handlebars
                    </p>
                    <h3>My Story</h3>
                    <p>
                        Since I was a young child, I have always had an obsession with lighthouses and the ocean (Exhibit A: the 40-count model lighthouse collection). After years of writing stories and poems, I appreciate the power of a good metaphor. Lighthouses exist to cut through the darkness and guide mariners as they navigate treacherous waters. Such is the goal I aspire to with each web application and site I build. In a world of mediocre designs and unresponsive layouts, I strive for excellence in both presentation and functionality, a shining light through a sea of subpar experiences. 
                    </p>
                    <p>
                        My content writing background also allows me to appreciate the difference between effective and flat messaging, and I apply this instinct to site design and functionality with the same prejudice as when I'm editing my future novel for the fifth time. The gap between good and bad UX is almost as subjective as the bridge between good and bad writing, but both have core principles and conventions that we should all follow. As both an experienced writer and burgeoning web developer, I aim to meet usability, SEO and mobile standards in every application and then deliver compelling content so that site and display work hand in hand to meet objectives and drive results.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
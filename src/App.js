import { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
 
class App extends Component {
  render() {
    return (
        <HashRouter>
          <div>
              <Header />
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/projects" component={Projects} />
                <Route path="/contact-me" component={Contact} />
                <Route path="/resume" component={Resume} />
              </div>
              <Footer />
          </div>
        </HashRouter>
    );
  }
}
 
export default App;
import { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

 
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
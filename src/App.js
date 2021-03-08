import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";


import {GrMail, GrLinkedin, GrGithub} from 'react-icons/gr';
import {SiGooglescholar} from 'react-icons/si';

import Home from './Pages/home';
import Projects from './Pages/projects';
import Research from './Pages/research';

import ScrollToTop from './Utils';



function App() {
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <div className="App">
          <TopBar/>
          <LinksBar/>
          <Switch>
            <Route path="/research">
              <Research />
            </Route>
            {/* <Route path="/projects">
              <Projects />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <div className="BottomBar">
        Made with React [<a href="https://github.com/runxuanjiang/runxuanjiang.github.io" target="_blank" style={{"color":"coral"}}>Source Code</a>]
      </div>
    </div>
  );
}

function TopBar() {
  let path = useLocation().pathname;

  return (
    <div className="NavBarOuter">
      <div className="NavBar">
          <Link className="MainNavTab" to="/" style={{color: (path == "/" ? "teal" : "gray")}}>Runxuan Jiang</Link>
          <Link className="NavTab" to="/research" style={{color: (path == "/research" ? "teal" : "gray")}}>Research</Link>
          {/* <Link className="NavTab" to="/projects" style={{color: (path == "/projects" ? "teal" : "gray")}}>Projects</Link> */}

      </div>
    </div>

  )
}

function LinksBar() {
  return (
    <div className="LinksBarOuter">
      <div className="LinksBarInner">

        <a href="mailto: runxuanj@umich.edu" target="_blank">
          <div className="ContactLabel">
            <GrMail/>Email
          </div>
        </a>

        <a href="https://www.linkedin.com/in/runxuanjiang/" target="_blank">
          <div className="ContactLabel">
            <GrLinkedin/>LinkedIn
          </div>
        </a>

        <a href="https://github.com/runxuanjiang" target="_blank">
          <div className="ContactLabel">
            <GrGithub/>Github
          </div>
        </a>

        <a href="https://scholar.google.com/citations?user=Xa3X9rAAAAAJ&hl=en" target="_blank">
          <div className="ContactLabel">
            <SiGooglescholar/>Google Scholar
          </div>
        </a>
        
      </div>
    </div>

  )
}


export default App;

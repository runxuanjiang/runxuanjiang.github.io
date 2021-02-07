import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import Home from './Pages/home';
import Projects from './Pages/projects';
import Research from './Pages/research';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <TopBar/>
          <Switch>
            <Route path="/research">
              <Research />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function TopBar() {
  let path = useLocation().pathname;

  return (
    <div className="NavBar">
      <Link className="MainNavTab" to="/" style={{color: (path == "/" ? "black" : "gray")}}>Runxuan Jiang</Link>

      <Link className="NavTab" to="/research" style={{color: (path == "/research" ? "black" : "gray")}}>Research</Link>

      <Link className="NavTab" to="/projects" style={{color: (path == "/projects" ? "black" : "gray")}}>Projects</Link>

    </div>
  )
}

export default App;

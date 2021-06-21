import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Style
import '../style/Navbar.css';

//Pages
import Home from '../pages/Home.js';
import TaskList from '../pages/TaskList.js';

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <nav className="nav-categories">
          <ul className="nav-menu">
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/TaskList">Task List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <React.Fragment>
            <div className="apps-list">
              <Route exact path = {'/'}>
                  <Home/>
              </Route>
              <Route exact path = {'/TaskList'}>
                  <TaskList/>
              </Route>
            </div>
          </React.Fragment>
        </Switch>
      </Router>
    )
  }
}

export default Navbar;

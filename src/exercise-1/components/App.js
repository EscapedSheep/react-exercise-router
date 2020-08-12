import React, {Component} from 'react';
import '../styles/App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter className="browerRouter">
          <ul className="navList">
            <li>
              <NavLink exact to="/" class="" activeClassName="selected">Home</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile" activeClassName="selected">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/about-us" activeClassName="selected">About Us</NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/my-profile' component={MyProfile}/>
            <Route path='/about-us' component={AboutUs}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

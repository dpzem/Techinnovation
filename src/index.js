import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter, NavLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";

import NavBar from "./Components//NavBar/navbar";
import SideDrawer from "./Components/SideDrawer/sidedrawer";
import Home from "./Views/Home";
import Login from "./Views/Login";
import MeetingRoomFinder from "./Views/MeetingRoomFinder";
import Locations from "./Views/Locations";
import AtOffice from "./Views/AtOffice";
import OnSite from "./Views/OnSite";
import Options from "./Views/Options";
import TeamLocation from "./Views/TeamLocation";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false
    };
  }

  toggleDrawer = open => () => {
    this.setState({
      drawerIsOpen: open
    });
  };

  render() {
    console.log("HI");
    return (
      <div>
        <CssBaseline />
        <Drawer
          open={this.state.drawerIsOpen}
          onClose={this.toggleDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <SideDrawer />
          </div>
        </Drawer>
        <NavBar
          onClick={() => {
            this.setState({ drawerIsOpen: true });
            console.log(this.state.drawerIsOpen);
          }}
        />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/meeting-room-finder" component={MeetingRoomFinder} />
          <Route exact path="/" component={Home} />
          <Route path="/locations" component={Locations} />
          <Route path="/atoffice" component={AtOffice} />
          <Route path="/onsite" component={OnSite} />
          <Route path="/options" component={Options} />
          <Route path="/teamlocation" component={TeamLocation} />
        </Switch>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

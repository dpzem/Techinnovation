import React, { Component } from "react";
import Button from "../Components/Button/button";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const centreAlign = {
  display: "flex",
  alignItems: "center",
  flex: 1,
  justifyContent: "center"
};

class Locations extends Component {
  render() {
    return (
      <div>
        <center>
          <br />
          <br />
          <br />
          <br />
          <Typography component="h2" variant="h4" gutterBottom>
            Where are you working today?
          </Typography>
          <br />
          <br />
          <br />
          <div style={centreAlign}>
            <NavLink to="/AtOffice" style={{ textDecoration: "none" }}>
              <Button label="Office" onClick={this.toggleData} />
            </NavLink>
            <Button label="Home" onClick={this.toggleData} />
            <NavLink to="/OnSite" style={{ textDecoration: "none" }}>
              <Button label="On Site" onClick={this.toggleData} />
            </NavLink>
          </div>
        </center>
      </div>
    );
  }
}

export default Locations;

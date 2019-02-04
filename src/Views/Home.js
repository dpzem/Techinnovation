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

class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography component="h3" variant="h3" gutterBottom>
            Location Sensation
          </Typography>
          <br />
          <br />
          <div style={centreAlign}>
            <NavLink to="/Locations" style={{ textDecoration: "none" }}>
              <Button label="Log location" onClick={this.toggleData} />
            </NavLink>
            <NavLink to="/teamlocation" style={{ textDecoration: "none" }}>
              <Button label="Find Team" onClick={this.toggleData} />
            </NavLink>
            <NavLink to="/Options" style={{ textDecoration: "none" }}>
              <Button label="Options" onClick={this.toggleData} />
            </NavLink>
          </div>
        </center>
      </div>
    );
  }
}

export default Home;

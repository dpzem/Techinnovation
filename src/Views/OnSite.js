import React, { Component } from "react";
import Button from "../Components/Button/button";
import Typography from "@material-ui/core/Typography";

class OnSite extends Component {
  render() {
    return (
      <div>
        <center>
          <br />
          <br />
          <br />
          <Typography component="h3" variant="h3" gutterBottom>
            Working on site?
          </Typography>
          <p1> How long will you be onsite until</p1>
          <br />
          <br />
          <input id="my-time" placeholder="Time (hh:mm)" />
          <br />
          <Button label="Confirm" onClick={this.toggleData} />
        </center>
      </div>
    );
  }
}

export default OnSite;

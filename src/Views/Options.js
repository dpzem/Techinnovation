import React, { Component } from "react";

import Checkbox from "../Components/Check/check";
import CheckD from "../Components/Check/checkDate";
import Typography from "@material-ui/core/Typography";

class Options extends Component {
  render() {
    return (
      <div>
        <center>
          <br />
          <br />
          <br />
          <Typography component="h3" variant="h3" gutterBottom>
            Options
          </Typography>
          <br />
          <p1> Set work week</p1>
          <br />
          <br />
          <CheckD />
          <br />
        </center>
      </div>
    );
  }
}

export default Options;

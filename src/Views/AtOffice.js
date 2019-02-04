import React, { Component } from "react";
import Button from "../Components/Button/button";
import Typography from "@material-ui/core/Typography";

class AtOffice extends Component {
  render() {
    return (
      <div>
        <center>
          <br />
          <br />
          <br />
          <Typography component="h3" variant="h3" gutterBottom>
            At the office?
          </Typography>
          <br />
          <p1> Select the area you are sitting in.</p1>
          <br />
          <br />
          <br />
          <Button label="Location 1" onClick={this.toggleData} />
          <Button label="Location 2" onClick={this.toggleData} />
          <Button label="Location 3" onClick={this.toggleData} />
        </center>
      </div>
    );
  }
}

export default AtOffice;

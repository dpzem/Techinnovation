import React, { Component } from "react";
import Button from "../Components/Button/button";
import Typography from "@material-ui/core/Typography";

class TeamLocation extends Component {
  render() {
    return (
      <div>
        <center>
          <br /> <br /> <br /> <br />
          <Typography component="h3" variant="h3" gutterBottom>
            My Team
          </Typography>
          <br /> <br />
          <Button label="Location 1" onClick={this.toggleData} />
          <Button label="Location 2" onClick={this.toggleData} />
          <Button label="Location 3" onClick={this.toggleData} />
        </center>
      </div>
    );
  }
}

export default TeamLocation;

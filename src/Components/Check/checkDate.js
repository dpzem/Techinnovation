import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const styles = {
  top: 0,
  middle: 0,
  alignItems: "center",
  justifyContent: "center",
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {}
};

class CheckboxLabels extends React.Component {
  state = {
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.mon}
              onChange={this.handleChange("mon")}
              value="mon"
            />
          }
          label="MON"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.tue}
              onChange={this.handleChange("tue")}
              value="tue"
            />
          }
          label="TUE"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.wed}
              onChange={this.handleChange("wed")}
              value="wed"
            />
          }
          label="WED"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.thu}
              onChange={this.handleChange("thu")}
              value="thu"
            />
          }
          label="THU"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.fri}
              onChange={this.handleChange("fri")}
              value="fri"
            />
          }
          label="FRI"
        />
      </FormGroup>
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxLabels);

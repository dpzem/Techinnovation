import React, { Component } from "react";

import Button from "../Components/Button/button";
import Text from "../Components/Text/text";
import { Doughnut } from "react-chartjs-2";

let data = {
  datasets: [
    {
      data: [10, 20, 30]
    }
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Red", "Yellow", "Blue"]
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false
    };
  }

  toggleData() {
    this.setState({
      data: true
    });
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <h1> Login </h1>
        <Text onClick={this.toggleData} />
        <Button label="login" onClick={this.toggleData} />
        <Doughnut data={data} />
      </div>
    );
  }
}

export default Login;

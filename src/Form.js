import React from "react";

import { GetUser } from "./ApiCaller";

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = event => {
    event.preventDefault();
    GetUser(this.props.onSubmit, this.state.userName);
    this.setState({ userName: "" });
  };
  handleChange = event => {
    this.setState({ userName: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleChange}
          placeholder="Github username"
        />
        <button type="submit"> Add card </button>
      </form>
    );
  }
}
export default Form;

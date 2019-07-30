import React from "react";
import { Redirect } from "react-router-dom";

import Form from "../components/Form";

class WritePageContainer extends React.Component {
  state = {
    formData: {
      name: "",
      title: "",
      body: "",
      avatar: "bunny",
    },
    doRedirect: false
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/comment/new", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.formData)
    })
    .then(() =>
      this.setState({ doRedirect: true })
    );
  }

  handleChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  }

  render() {
    const { avatar, doRedirect } = this.state;

    if (doRedirect) {
      return (
        <Redirect to="/readsomething" push />
      );
    }

    return (
      <Form
        avatar={avatar}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    );
  }
}

export default WritePageContainer;

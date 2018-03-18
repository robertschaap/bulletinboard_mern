import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styles from "./Form.scss";

class Form extends Component {
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

    const doRedirect = this.state.doRedirect;
    if (doRedirect) {
      return (
        <Redirect to="/readsomething" push />
      );
    }

    return (
      <main className={styles.component}>
        <section>
          <h2>Write Something</h2>
          <form onSubmit={this.handleSubmit} className={styles.form}>

            <label>What's your name?:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange} />
        
            <label>Write a title (max 100 char):</label>
            <input
              type="text"
              name="title"
              onChange={this.handleChange} />
        
            <label>Share your message:</label>
            <textarea
              type="text"
              name="body"
              onChange={this.handleChange} />
        
            <label>Select an avatar:</label>
            <select
              name="avatar"
              value={this.state.avatar}
              onChange={this.handleChange}>
              <option value="bunny">A cute bunny</option>
              <option value="elephant">A fierce elephant</option>
              <option value="hippo">A loud hippo</option>
              <option value="hyena">A laughing hyena</option>
              <option value="kitty">A rofl-ing kitty</option>
              <option value="puppy">A bashful puppy</option>
              <option value="sheep">The master race</option>
            </select>
            
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    );

  }
}

export default Form;

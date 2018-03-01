import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    title: "",
    body: "",
    avatar: "bunny",
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form id="postcomment" onSubmit={this.handleSubmit} className="wrapper">
        <label>What's your name?:</label>
        <input type="text" name="name" onChange={this.handleChange} />
    
        <label>Write a title (max 100 char):</label>
        <input type="text" name="title" onChange={this.handleChange} />
    
        <label>Share your message:</label>
        <textarea type="text" name="body" onChange={this.handleChange} />
    
        <label>Select an avatar:</label>
        <select name="avatar" value={this.state.avatar} onChange={this.handleChange}>
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
    );

  }
}

export default Form;
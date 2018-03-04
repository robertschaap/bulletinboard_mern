import React, { Component } from "react";
import Comment from "../../components/Comment/Comment";

class Comments extends Component {
  state = {
    comments: [],
    sortDirection: "desc",
    offset: 0,
    isLoading: false
  }

  sortComments = (event) => {

    // API call to db
    // this.setState({
    //   comments: arrayFromAPI,
    //   value: event.target.value
    // });
  }

  loadMoreComments = () => {
    // const newComments = [
    //   ...this.state.comments,
    //   ...nextArrayFromAPI
    // ];

    // this.setState({
    //   ...this.state,
    //   comments: newComments
    //   offset: this.state.offset + 4
    // });
  }

  componentDidMount() {
    const { offset, sortDirection } = this.state;
    fetch(`/api/comment?offset=${offset}&sort=${sortDirection}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        ...this.state,
        comments: data
      });
    });
  }

  render() {
    let comment = this.state.comments.map((item, index) => 
      (<Comment 
        key={index}
        image={item.avatar}
        title={item.title}
        name={item.name}
        body={item.body} />)
    );

    return (
      <main>
        <section id="comments">
          <h2>Read Something</h2>
          <select id="sortbtn" value={this.state.sortDirection} onChange={this.sortComments}>
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
          </select>
          {comment}
        </section>

        <section>
          <button id="loadcomments" className="wrapper" onClick={this.loadMoreComments}>Load More Comments</button>
        </section>
      </main>
    );
  }
}

export default Comments;

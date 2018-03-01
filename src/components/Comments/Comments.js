import React, { Component } from "react";
import Comment from "../../components/Comment/Comment";

let arrayFromAPI = [
  { uid: 1, image: "Bunny", title: "Title", name: "Name", body: "Body" },
  { uid: 2, image: "Hyena", title: "Title", name: "Name", body: "Body" },
  { uid: 3, image: "Hippo", title: "Title", name: "Name", body: "Body" },
  { uid: 4, image: "Sheep", title: "Title", name: "Name", body: "Body" },
];

let nextArrayFromAPI = [
  { uid: 5, image: "Bunny", title: "Title", name: "Name", body: "Body" },
  { uid: 6, image: "Hyena", title: "Title", name: "Name", body: "Body" },
  { uid: 7, image: "Hippo", title: "Title", name: "Name", body: "Body" },
  { uid: 8, image: "Sheep", title: "Title", name: "Name", body: "Body" },
];
// Fetch object, add to state, click -load-more- appends new object
// Change sort order overwrites states
// If there are no more comments to be retrieved - remove button

class Comments extends Component {
  state = {
    comments: arrayFromAPI,
    value: "desc"
  }

  sortComments = (event) => {

    // API call to db
    this.setState({
      comments: arrayFromAPI,
      value: event.target.value
    });
  }

  loadMoreComments = () => {
    const newComments = [
      ...this.state.comments,
      ...nextArrayFromAPI
    ];

    this.setState({
      ...this.state,
      comments: newComments
    });
  }

  render() {
    let comment = this.state.comments.map((item, index) => 
      <Comment key={index} image={item.image} title={item.title} name={item.name} body={item.body} />
    );

    return (
      <main>
        <section id="comments">
          <h2>Read Something</h2>
          <select id="sortbtn" value={this.state.value} onChange={this.sortComments}>
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

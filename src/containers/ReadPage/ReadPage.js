import React, { Component } from 'react';
import Comment from '../../components/Comment/Comment';

let commentObject = [
  { image: "Bunny", title: "Title", name: "Name", body: "Body" },
  { image: "Bunny", title: "Title", name: "Name", body: "Body" },
  { image: "Bunny", title: "Title", name: "Name", body: "Body" },
  { image: "Bunny", title: "Title", name: "Name", body: "Body" },
]

// Fetch object, add to state, click -load-more- appends new object
// Change sort order overwrites states

class ReadPage extends Component {
  state = {
    comments: commentObject
  }

  render() {
    let comment = this.state.comments.map((item, index) => {
      return <Comment key={index} image={item.image} title={item.title} name={item.name} body={item.body}/>
    });

    return (
      <main>
        <section id="comments">
          <h2>Read Something</h2>
          <select id="sortbtn" name="com_sort">
              <option value="desc" selected="selected">Newest First</option>
              <option value="asc">Oldest First</option>
          </select>
          {comment}
        </section>

        <section>
          <button id="loadcomments" class="wrapper">Load More Comments</button>
        </section>
      </main>
    );
  }
};

export default ReadPage;

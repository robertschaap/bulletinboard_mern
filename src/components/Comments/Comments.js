import React, { Component } from "react";
import Comment from "../../components/Comment/Comment";
import styles from "./Comments.scss";

class Comments extends Component {
  state = {
    comments: [],
    sortDirection: "desc",
    offset: 0,
    isLoading: false
  }

  sortComments = (event) => {

    let { sortDirection } = this.state;
    let newSortDirection = event.target.value;

    if (sortDirection !== newSortDirection) {
      fetch(`/api/comment?offset=${0}&sort=${newSortDirection}`)
        .then(res => res.json())
        .then(data => {
          
          this.setState({
            ...this.state,
            comments: data,
            sortDirection: newSortDirection,
            offset: 0
          });
        });
    }
  }

  loadComments = () => {

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

  loadMoreComments = () => {

    const incr = 4;
    const { offset, sortDirection } = this.state;
    
    fetch(`/api/comment?offset=${offset+incr}&sort=${sortDirection}`)
    .then(res => res.json())
    .then(data => {

      const newComments = [
        ...this.state.comments,
        ...data
      ];
  
      this.setState({
        ...this.state,
        comments: newComments,
        offset: this.state.offset + incr
      });
    }); 
  }

  componentDidMount() {
    this.loadComments();
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
      <main className={styles.component}>
        <section className={styles.wrapper}>
          <h2>Read Something</h2>
          <select
            className={styles.sortbtn}
            value={this.state.sortDirection}
            onChange={this.sortComments}>
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
          </select>
          {comment}
        </section>

        <section className={styles.wrapper}>
          <button onClick={this.loadMoreComments}>
            Load More Comments
          </button>
        </section>
      </main>
    );
  }
}

export default Comments;

import React, { Component } from "react";
import styles from "./Comments.scss";

import Comment from "../../components/Comment/";

class Comments extends Component {
  render() {
    const {
      comments,
      onLoadComments,
      onSortComments,
      sortDirection
    } = this.props;

    return (
      <main className={styles.component}>
        <section className={styles.wrapper}>
          <h2>Read Something</h2>
          <select
            className={styles.sortbtn}
            value={sortDirection}
            onChange={onSortComments}>
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
          </select>
          {comments.map((item, index) => (
            <Comment
              key={index}
              image={item.avatar}
              title={item.title}
              name={item.name}
              body={item.body} />
          ))}
        </section>

        <section className={styles.wrapper}>
          <button onClick={onLoadComments}>
            Load More Comments
          </button>
        </section>
      </main>
    );
  }
}

export default Comments;

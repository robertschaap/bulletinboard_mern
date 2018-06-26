import React, { Component } from "react";
import Comment from "../../components/Comment/";
import styles from "./Comments.scss";
import { connect } from "react-redux";
import { getComments } from "../../redux";

class Comments extends Component {

  sortComments = (event) => {
    let { sortDirection } = this.props;
    let newSortDirection = event.target.value;

    if (sortDirection !== newSortDirection) {
      this.loadComments(newSortDirection);
    }
  }

  loadComments = (changeSort) => {
    let offset = changeSort ? 0 : this.props.offset;
    let sortDirection = changeSort ? changeSort : this.props.sortDirection;

    fetch(`/api/comment?offset=${offset}&sort=${sortDirection}`)
      .then(res => res.json())
      .then(data => {
        this.props.getComments(data, sortDirection);
      });
  }

  componentDidMount() {
    this.loadComments();
  }

  render() {
    let comment = this.props.comments.map((item, index) =>
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
            value={this.props.sortDirection}
            onChange={this.sortComments}>
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
          </select>
          {comment}
        </section>

        <section className={styles.wrapper}>
          <button onClick={() => this.loadComments()}>
            Load More Comments
          </button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.reducer.comments,
  sortDirection: state.reducer.sortDirection,
  offset: state.reducer.offset
});

const mapDispatchToProps = {
  getComments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);

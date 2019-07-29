import React from "react";
import { connect } from "react-redux";
import { getComments } from "../redux";

import Comments from "../components/Comments";

class ReadPageContainer extends React.Component {
  componentDidMount() {
    this.loadComments();
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

  sortComments = (event) => {
    const { sortDirection } = this.props;
    const newSortDirection = event.target.value;

    if (sortDirection !== newSortDirection) {
      this.loadComments(newSortDirection);
    }
  }

  render() {
    const {
      comments,
      sortDirection,
    } = this.props;

    return (
        <Comments
          comments={comments}
          onLoadComments={this.loadComments}
          onSortComments={this.sortComments}
          sortDirection={sortDirection} />
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
  mapDispatchToProps,
)(ReadPageContainer);

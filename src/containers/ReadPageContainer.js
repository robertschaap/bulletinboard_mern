import React from "react";
import { connect } from "react-redux";
import { loadComments, getComments, getOffset, getSortDirection } from "../redux";

import Comments from "../components/Comments";

class ReadPageContainer extends React.Component {
  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = (changeSort) => {
    let offset = changeSort ? 0 : this.props.offset;
    let sortDirection = changeSort ? changeSort : this.props.sortDirection;

    fetch(`/api/comment?offset=${offset}&sort=${sortDirection}`)
      .then(res => res.json())
      .then(data => {
        this.props.loadComments(data, sortDirection);
      });
  }

  sortComments = (event) => {
    const { sortDirection } = this.props;
    const newSortDirection = event.target.value;

    if (sortDirection !== newSortDirection) {
      this.fetchComments(newSortDirection);
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
          onLoadComments={() => this.fetchComments()}
          onSortComments={this.sortComments}
          sortDirection={sortDirection} />
    );
  }
}

const mapStateToProps = (state) => ({
  comments: getComments(state),
  sortDirection: getSortDirection(state),
  offset: getOffset(state),
});

const mapDispatchToProps = {
  loadComments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadPageContainer);

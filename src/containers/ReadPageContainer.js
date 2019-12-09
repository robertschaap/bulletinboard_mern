import React from 'react';
import { connect } from 'react-redux';
import { loadComments, sortComments, getComments, getOffset, getSortDirection } from '../ducks/comments';

import Comments from '../components/Comments';

class ReadPageContainer extends React.Component {
  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sortDirection !== this.props.sortDirection) {
      console.log(this.props);
      this.fetchComments(true);
    }
  }

  fetchComments = () => {
    fetch(`/api/comment?offset=${this.props.offset}&sort=${this.props.sortDirection}`)
      .then(res => res.json())
      .then(data => {
        this.props.loadComments(data);
      });
  }

  render() {
    const {
      comments,
      sortDirection,
      sortComments,
    } = this.props;

    return (
        <Comments
          comments={comments}
          onLoadComments={() => this.fetchComments()}
          onSortComments={sortComments}
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
  sortComments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadPageContainer);

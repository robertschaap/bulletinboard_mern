import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateForm, getForm } from '../ducks/form';

import Form from '../components/Form';

class WritePageContainer extends React.Component {
  state = {
    doRedirect: false
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/comment/new', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.props.formData)
    })
    .then(() =>
      this.setState({ doRedirect: true })
    );
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.updateForm(name, value);
  }

  render() {
    const { avatar, doRedirect } = this.state;

    if (doRedirect) {
      return (
        <Redirect to="/readsomething" push />
      );
    }

    return (
      <Form
        avatar={avatar}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = (state) => ({
  formData: getForm(state),
});

const mapDispatchToProps = {
  updateForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WritePageContainer);

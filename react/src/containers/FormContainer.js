import React, { Component } from 'react';
import TextField from '../components/TextField';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: '',
      url: '',
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
  }

  componentDidUpdate() {
    if (this.props.clearForm) {
      this.handleClearForm();
      this.props.resetForm();
    }
  }

  handleClearForm() {
    this.setState({
      summary: '',
      url: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let payload = JSON.stringify({
      summary: this.state.summary,
      url: this.state.url
    });
    this.props.addPost(payload);
  }

  handleSummaryChange(event) {
    this.setState({ summary: event.target.value })
  }

  handleUrlChange(event) {
    this.setState({ url: event.target.value })
  }

  render() {
    return(
      <form className='callout' onSubmit={this.handleFormSubmit}>
        <TextField
          content={this.state.summary}
          label='Summary'
          name='summary'
          handlerFunction={this.handleSummaryChange}
          errors={this.props.errors.summary}
        />
        <TextField
          content={this.state.url}
          label='URL'
          name='url'
          handlerFunction={this.handleUrlChange}
          errors={this.props.errors.url}
        />
        <input className='button' type='submit' value='Save'/>
      </form>
    );
  }
}


export default FormContainer;

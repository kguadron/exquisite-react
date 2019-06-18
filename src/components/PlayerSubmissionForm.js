import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adjective: "",
      noun: "",
      adverb: "",
      verb: "",
      adjectiveTwo: "",
      nounTwo: "",
      // playerNumber: 1
    };
  }

  addSubmission = (event) => {
    event.preventDefault();
    const submission = this.state
    // submission.playerNumber += 1
    this.props.addSubmissionCallback(submission)
    this.clearForm()
  }

  clearForm = () => {
    const updatedState = this.state
    updatedState.adjective = ""
    updatedState.noun = ""
    updatedState.adverb = ""
    updatedState.verb = ""
    updatedState.adjectiveTwo = ""
    updatedState.nounTwo = ""
    this.setState(updatedState);
  }

  onInputChange = (event) => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.playerNumber }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.addSubmission}>

          <div className="PlayerSubmissionForm__poem-inputs">
            <p> The </p>
            <input
              name="adjective"
              placeholder="adjective"
              type="text" 
              value={this.state.adjective}
              onChange={this.onInputChange}
            />
            <input
              name="noun"
              placeholder="noun"
              type="text" 
              value={this.state.noun}
              onChange={this.onInputChange}
            />
            <input
              name="adverb"
              placeholder="adverb"
              type="text" 
              value={this.state.adverb}
              onChange={this.onInputChange}
            />
            <input
              name="verb"
              placeholder="verb"
              type="text" 
              value={this.state.verb}
              onChange={this.onInputChange}
            />
            <p> the </p>
            <input
              name="adjectiveTwo"
              placeholder="adjective"
              type="text" 
              value={this.state.adjectiveTwo}
              onChange={this.onInputChange}
            />
            <input
              name="nounTwo"
              placeholder="noun"
              type="text" 
              value={this.state.nounTwo}
              onChange={this.onInputChange}
            />
             <p> . </p>
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;

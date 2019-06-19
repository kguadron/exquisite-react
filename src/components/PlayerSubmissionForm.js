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
    };
  }

  addSubmission = (event) => {
    event.preventDefault();
    const submission = this.state

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

  isValidInput = (value) => {
    return value.length
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.playerNumber }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.addSubmission}>

          <div className="PlayerSubmissionForm__poem-inputs">
            <p> The </p>
            <input
              name="adjective"
              className={this.isValidInput(this.state.adjective) > 0 ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"}
              placeholder="adjective"
              type="text" 
              value={this.state.adjective}
              onChange={this.onInputChange}
            />
            <input
              name="noun"
              className={this.isValidInput(this.state.noun) > 0 ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"}
              placeholder="noun"
              type="text" 
              value={this.state.noun}
              onChange={this.onInputChange}
            />
            <input
              name="adverb"
              className={this.isValidInput(this.state.adverb) > 0 ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"}
              placeholder="adverb"
              type="text" 
              value={this.state.adverb}
              onChange={this.onInputChange}
            />
            <input
              name="verb"
              className={this.isValidInput(this.state.verb) > 0 ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"}
              placeholder="verb"
              type="text" 
              value={this.state.verb}
              onChange={this.onInputChange}
            />
            <p> the </p>
            <input
              name="adjectiveTwo"
              className={this.isValidInput(this.state.adjectiveTwo) > 0 ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"}
              placeholder="adjective"
              type="text" 
              value={this.state.adjectiveTwo}
              onChange={this.onInputChange}
            />
            <input
              name="nounTwo"
              className={this.isValidInput(this.state.nounTwo) > 0 ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"}
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
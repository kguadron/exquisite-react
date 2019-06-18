import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allSubmissions: [],
      mostRecentSubmission: "",
      playerNumber: 1
    }
  }

  constructSubmissionSentence = (words) => {
    const sentence = 'The ' + words.adjective + ' ' + words.noun + ' ' 
                      + words.adverb + ' the ' + words.verb + ' '
                      + words.adjectiveTwo + ' ' + words.nounTwo + '.'
    return sentence
  }

  addSubmission = (submission) => {
    const newState = this.state;
    newState.mostRecentSubmission = this.constructSubmissionSentence(submission);
    newState.allSubmissions.push(newState.mostRecentSubmission);
    newState.playerNumber += 1;
    this.setState({newState})
    console.log(this.state.allSubmissions)
    console.log(this.state.mostRecentSubmission)
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and 
          submitting the form below. Each turn should be 
          done individually and <em>in secret!</em> Take 
          inspiration from the revealed recent submission. 
          When all players are finished, click the final 
          button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your 
          poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission />

        <PlayerSubmissionForm 
        addSubmissionCallback={this.addSubmission}
        playerNumber={this.state.playerNumber}
        />

        <FinalPoem />

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;

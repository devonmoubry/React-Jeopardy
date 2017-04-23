import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class ClueModal extends React.Component {
  constructor(props) {
    super(props);

    this.submitAnswer = this.submitAnswer.bind(this);
  }

  submitAnswer(event) {
    event.preventDefault;
    const contestantAnswer = this.refs.contestantAnswer.value;
    const correctAnswer = this.props.clue.answer;
    if (contestantAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
      console.log('mo money');
    } else {
      console.log('no mo money');
    }
  }

  pass() {
    console.log('pass');
  }

  render() {
    return(
      <section className={'modal-container'}>
        <div className={'modal'}>

          <h2>{this.props.clue.question}</h2>
          <input ref='contestantAnswer' id='contestantAnswer' type='text' placeholder='answer' />
          <button type='submit' onClick={this.submitAnswer}>Submit Answer</button>
          <button onClick={this.pass}>Pass</button>
        </div>
      </section>
    );
  }
}

export default connect(container.allState)(ClueModal)

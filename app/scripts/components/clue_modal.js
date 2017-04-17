import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class ClueModal extends React.Component {
  constructor(props) {
    super(props);
  }

  answer (event) {
    event.preventDefault();
    if (event.target.elements.contestantAnswer === clue.answer) {
      console.log('mo money');
    } else {
      console.log('no mo money');
    }
  }

  render() {
    return(
      <section className={'modal-container'}>
        <div className={'modal'}>
          <h2>{category.title}</h2>
          <h2>{clue.question}</h2>
          <input id='contestantAnswer' type='text' placeholder='answer' />
          <button onClick={this.submitAnswer}>Submit Answer</button>
          <button onClick={this.pass}>Pass</button>
        </div>
      </section>
    );
  }
}

export default connect(container.allState)(ClueModal)

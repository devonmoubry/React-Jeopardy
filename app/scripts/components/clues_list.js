import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class CluesList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let category = this.props.category;
    if (category.clues !== undefined && category.clues.length > 0) {
      return(
        <section>
          <ul>
            {category.clues.map(function(clue) {
              return (
                <li key={clue.id}>
                {clue.question}
                </li>
              )
            })}
          </ul>
        </section>
      );
    } else {
      return(
        <p>Loading clues...</p>
      );
    }
  }
}

export default connect(container.allState)(CluesList)

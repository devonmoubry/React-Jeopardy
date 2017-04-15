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
          <p>I have clues</p>
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

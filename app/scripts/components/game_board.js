import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import CluesList from './clues_list.js'

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let categories = this.props.categories;

    return(
      <section>
        <ul>
        {
          categories.map(function(category) {
            return (
              <li key={category.id}>
                {category.title}
                <CluesList category={category} />
              </li>
            );
          })
        }
        </ul>
      </section>
    );
  }
}

export default connect(container.allState)(GameBoard)

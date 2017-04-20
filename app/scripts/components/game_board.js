import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import CluesList from './clues_list.js'
import ClueModal from './clue_modal.js'

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let categories = this.props.categories;

    let clueModal = '';
    if (this.props.showModal == true) {
      clueModal = <ClueModal clue={this.props.currentClue} />
    }

    return(
      <section>
        <ul>
          {
            categories.map(function(category) {
              return (
                <li key={category.id}>
                  <h2>{category.title}</h2>
                  <CluesList category={category} />
                </li>
              );
            })
          }
        </ul>

        { clueModal }
      </section>
    );
  }
}

export default connect(container.allState)(GameBoard)

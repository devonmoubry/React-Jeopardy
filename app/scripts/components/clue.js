import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class Clue extends React.Component {
    constructor(props) {
        super(props);

        this.clueClick = this.clueClick.bind(this);
    }

    clueClick (e) {
      e.preventDefault();
      this.props.dispatch({ type: "SET_CURRENT_CLUE", clue: this.props.clue });
      this.props.dispatch({ type: "SHOW_MODAL" });
    }

    render() {
        return(
            <li >
            <a href="#" onClick={this.clueClick}>{this.props.clue.value}</a>
            </li>
        );
    }
}
export default connect(container.allState)(Clue)

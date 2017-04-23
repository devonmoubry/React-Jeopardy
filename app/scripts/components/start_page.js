import React from 'react'
import { connect } from 'react-redux'
import addUser from '../actions/adduser.js'
import container from '../containers/all.js'

class Startpage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        event.preventDefault();
        let user = this.refs.username.value;
        this.props.dispatch(addUser(user));
    }

    render() {
        return(
            <section className="start-section">
                <h1>Let’s Play!</h1>
                <form onSubmit={this.handleClick}>
                    <input ref='username' type='text' defaultValue='Devon' />
                    <input type='submit' value="Play" />
                </form>
            </section>
        );
    }
}

export default connect(container.allState)(Startpage)

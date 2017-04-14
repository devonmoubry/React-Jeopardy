import React from 'react'

class Startpage extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        let username = this.refs.username.value;
        this.props.dispatch(addUser(username))
    }

    render() {
        return(
            <section>
                <form id='username' onSubmit={this.handleClick}>
                    <input ref='username' type='text' defaultValue='Devon' />
                    <input type='submit' value="Play" />
                </form>
            </section>
        );
    }
}

export default Startpage

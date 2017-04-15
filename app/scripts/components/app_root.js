import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import container from '../containers/all.js'
import Startpage from './start_page.js'

class AppRoot extends React.Component {
    render () {
        return (
            <main>
                <Startpage />
            </main>
        );
    }
}

export default connect(container.allState)(AppRoot)

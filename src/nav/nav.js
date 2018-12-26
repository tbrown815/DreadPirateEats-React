import React from 'react';
import { connect } from 'react-redux'
import { loginUser, logoutUser, returnToGame } from '../actions/actions'

import { editFavs } from '../actions/favActions'

import About from './about'
import Favorites from '../favorites/favorites'

import './nav.css'


class Nav extends React.Component {

    loginClick(event) {
        event.preventDefault();

        this.props.dispatch(loginUser())
    }

    logoutClick(event) {
        event.preventDefault();

       return this.props.dispatch(logoutUser())
    }

    editUserFavs(event) {
        event.preventDefault();

        this.props.dispatch(editFavs())
    }

    returnGame(event) {
        event.preventDefault();

        this.props.dispatch(returnToGame())
    }

    render() {


        if (this.props.loggedIn === 0) {
            return (

                <header>

                    <nav className='col-12 topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link'><a href='#aboutModal'>[About]</a></span></li>
                            <li><span className='link' onClick={event => this.loginClick(event)}>[LogIn]</span></li>
                        </ul>
                    </nav>

                    <About />

                </header>

            )
        }


        if (this.props.loggedIn === 1 || this.props.loggedIn === 2) {
            return (
                <header>

                    <nav className='col-12 topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link'><a href='#aboutModal'>[About]</a></span></li>
                        </ul>
                    </nav>

                    <About />

                </header>
            )
        }



        if (this.props.loggedIn === 3) {
            return (
                <header>

                    <nav className='col-12 topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link' onClick={event => this.logoutClick(event)}>[Logout]</span></li>
                            <li><span className='link'><a href='#aboutModal'>[About]</a></span></li>
                            <li><span className='link' onClick={event => this.editUserFavs(event)}>[Favorites]</span></li>
                        </ul>
                    </nav>

                    <About />

                </header>
            )
        }

        if (this.props.loggedIn === 4) {
            return (
                <header>

                    <nav className='col-12 topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link' onClick={event => this.logoutClick(event)}>[Logout]</span></li>
                            <li><span className='link'><a href='#aboutModal'>[About]</a></span></li>
                            <li><span className='link' onClick={event => this.returnGame(event)}>[Play Game]</span></li>
                        </ul>
                    </nav>

                    <About />

                </header>
            )
        }
    }

}


const mapStateToProps = state => ({
    loggedIn: state.loggedIn
})


export default connect(mapStateToProps)(Nav)


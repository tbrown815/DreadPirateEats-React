import React from 'react';
import { connect } from 'react-redux'
import { loginUser, logoutUser, returnToGame, signupUser, displayAbout } from '../actions/actions'
import { editFavs } from '../actions/favActions'

import './nav.css'


class Nav extends React.Component {

    loginClick(event) {
        event.preventDefault();

        this.props.dispatch(loginUser())
    }

    signUpClick(event) {
        event.preventDefault();

        this.props.dispatch(signupUser())
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

    clickAbout(event) {
        event.preventDefault();
        
        let oldLoginState = this.props.loggedIn;

        this.props.dispatch(displayAbout(oldLoginState))
    }

    render() {


        if (this.props.loggedIn === 0) {
            return (

                <header>

                    <nav className='topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link'onClick={event => this.clickAbout(event)}>[About]</span></li>
                            <li><span className='link' onClick={event => this.loginClick(event)}>[LogIn]</span></li>
                        </ul>
                    </nav>

                </header>

            )
        }


        if (this.props.loggedIn === 1 || this.props.loggedIn === 2) {
            return (
                <header>

                    <nav className='topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                        <li><span className='link'onClick={event => this.clickAbout(event)}>[About]</span></li>
                        </ul>
                    </nav>

                </header>
            )
        }



        if (this.props.loggedIn === 3) {
            return (
                <header>

                    <nav className='topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link' onClick={event => this.logoutClick(event)}>[Logout]</span></li>
                            <li><span className='link'onClick={event => this.clickAbout(event)}>[About]</span></li>
                            <li><span className='link' onClick={event => this.editUserFavs(event)}>[Favorites]</span></li>
                        </ul>
                    </nav>

                </header>
            )
        }

        if (this.props.loggedIn === 4) {
            return (
                <header>

                    <nav className='topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link' onClick={event => this.logoutClick(event)}>[Logout]</span></li>
                            <li><span className='link'onClick={event => this.clickAbout(event)}>[About]</span></li>
                            <li><span className='link' onClick={event => this.returnGame(event)}>[Play Game]</span></li>
                        </ul>
                    </nav>

                </header>
            )
        }

        if (this.props.loggedIn === 5 || this.props.loggedIn === 6) {
            return (
                <header>

                    <nav className='topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                        <li><span className='link'onClick={event => this.clickAbout(event)}>[About]</span></li>
                            <li><span className='link' onClick={event => this.signUpClick(event)}>[Join the Crew!]</span></li>
                            <li><span className='link' onClick={event => this.loginClick(event)}>[LogIn]</span></li>
                        </ul>
                    </nav>

                </header>
            )
        }

        if (this.props.loggedIn === 7) {
            return (
                <header>

                    <nav className='topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                        <li><span className='link'onClick={event => this.clickAbout(event)}>[About]</span></li>
                            <li><span className='link' onClick={event => this.signUpClick(event)}>[Join the Crew!]</span></li>
                            <li><span className='link' onClick={event => this.loginClick(event)}>[LogIn]</span></li>
                        </ul>
                    </nav>

                </header>
            )
        }



    }//END RENDER

}


const mapStateToProps = state => ({
    loggedIn: state.loggedIn,
    prevLoggedIn: state.prevLoggedIn
})


export default connect(mapStateToProps)(Nav)


import React from 'react';
import { connect } from 'react-redux'
import { loginUser, logoutUser, returnToGame, signupUser, displayAbout, cancelAbout } from '../actions/actions'
import { editFavs } from '../actions/favActions'

import './nav.css'


export class Nav extends React.Component {

    //displays the login flow
    loginClick(event) {
        event.preventDefault();

        this.props.dispatch(loginUser())
    }
    //displays the signup flow
    signUpClick(event) {
        event.preventDefault();

        this.props.dispatch(signupUser())
    }
    //logs the user out of the app
    logoutClick(event) {
        event.preventDefault();

        return this.props.dispatch(logoutUser())
    }
    //when logged in user can view/edit their favs
    editUserFavs(event) {
        event.preventDefault();

        this.props.dispatch(editFavs())
    }
    //when viewing favs user can cancel and return to the game
    returnGame(event) {
        event.preventDefault();

        this.props.dispatch(returnToGame())
    }
    //displays about page
    clickAbout(event) {
        event.preventDefault();

        let oldLoginState = this.props.loggedIn;
        this.props.dispatch(displayAbout(oldLoginState))
    }
    //returns user to the previous state
    clickReturn(event) {
        event.preventDefault();

        let oldLoginState = this.props.prevLoggedIn;

        this.props.dispatch(cancelAbout(oldLoginState))
    }

    render() {

        //default state
        if (this.props.loggedIn === 0) {
            return (

                <header>

                    <nav className='topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul className='navList'>
                            <li><span className='link aboutLink' onClick={event => this.clickAbout(event)}>[About]</span></li>
                            <li><span className='link loginLink' onClick={event => this.loginClick(event)}>[LogIn]</span></li>
                        </ul>
                    </nav>

                </header>

            )
        }

        //user login page and sign up state
        if (this.props.loggedIn === 1 || this.props.loggedIn === 2) {
            return (
                <header>

                    <nav className='topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link aboutLink' onClick={event => this.clickAbout(event)}>[About]</span></li>
                        </ul>
                    </nav>

                </header>
            )
        }


        //logged in state
        if (this.props.loggedIn === 3) {
            return (
                <header>

                    <nav className='topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link logoutLink' onClick={event => this.logoutClick(event)}>[Logout]</span></li>
                            <li><span className='link aboutLink' onClick={event => this.clickAbout(event)}>[About]</span></li>
                            <li><span className='link favsLink' onClick={event => this.editUserFavs(event)}>[Favorites]</span></li>
                        </ul>
                    </nav>

                </header>
            )
        }
        //edit fav state
        if (this.props.loggedIn === 4) {
            return (
                <header>

                    <nav className='topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link logoutLink' onClick={event => this.logoutClick(event)}>[Logout]</span></li>
                            <li><span className='link aboutLink' onClick={event => this.clickAbout(event)}>[About]</span></li>
                            <li><span className='link playLink' onClick={event => this.returnGame(event)}>[Play Game]</span></li>
                        </ul>
                    </nav>

                </header>
            )
        }
        //guest state
        if (this.props.loggedIn === 5 || this.props.loggedIn === 6) {
            return (
                <header>

                    <nav className='topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link aboutLink' onClick={event => this.clickAbout(event)}>[About]</span></li>
                            <li><span className='link joinLink' onClick={event => this.signUpClick(event)}>[Join the Crew!]</span></li>
                            <li><span className='link loginLink' onClick={event => this.loginClick(event)}>[LogIn]</span></li>
                        </ul>
                    </nav>

                </header>
            )
        }
        //about state
        if (this.props.loggedIn === 7) {
            return (
                <header>

                    <nav className='topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link returnLink' onClick={event => this.clickReturn(event)}>[Return]</span></li>
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


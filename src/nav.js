import React, { Component } from 'react';

import About from './about'
import Favorites from './favorites'

import './nav.css'


export default class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            login: 0
        }
    }


    loginClick(event) {
        event.preventDefault();

        this.setState({
            login: 1
        }, () => {
            let login = this.state.login

            this.props.setLogin(login)
        })
    }

    logoutClick(event) {
        event.preventDefault();

        this.setState({
            login: 0
        }, () => {

            let login = this.state.login

            this.props.setLogin(login)
        })
    }

    userLoggedIn(loggedInStatus) {

        if (loggedInStatus > 2) {

            this.setState({
                login: loggedInStatus
            })
        }
    }



    render() {


        if (this.state.login === 0) {
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


        if (this.state.login === 1) {
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



        if (this.state.login === 3) {
            return (
                <header>

                    <nav className='col-12 topNav'>
                        <h1 className='navTitle'>Dread Pirate Eats</h1>
                        <ul>
                            <li><span className='link' onClick={event => this.logoutClick(event)}>[Logout]</span></li>
                            <li><span className='link'><a href='#aboutModal'>[About]</a></span></li>
                            <li><span className='link'><a href='#favsModal'>[Favorites]</a></span></li>
                        </ul>
                    </nav>

                <About />

                <Favorites />

                </header>
            )
        }

    }

}


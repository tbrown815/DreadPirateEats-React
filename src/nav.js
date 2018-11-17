import React, { Component } from 'react';

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


                    <div id='aboutModal' className='modal modalContent'>
                        <div>
                            <a href='#close' title='Close' className='close'>X</a>
                            <h2 className='modalTitle'>About Dread Pirate Eats!</h2>
                            <p>This is how to play the Dread Pirate Eats game.</p>
                            <br />
                            <p>This is the Dread Pirate Eats history.</p>
                        </div>
                    </div>
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


                    <div id='aboutModal' className='modal modalContent'>
                        <div>
                            <a href='#close' title='Close' className='close'>X</a>
                            <h2 className='modalTitle'>About Dread Pirate Eats!</h2>
                            <p>This is how to play the Dread Pirate Eats game.</p>
                            <br />
                            <p>This is the Dread Pirate Eats history.</p>
                        </div>
                    </div>
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


                    <div id='aboutModal' className='modal modalContent'>
                        <div>
                            <a href='#close' title='Close' className='close'>X</a>
                            <h2 className='modalTitle'>About Dread Pirate Eats!</h2>
                            <p>This is how to play the Dread Pirate Eats game.</p>
                            <br />
                            <p>This is the Dread Pirate Eats history.</p>
                        </div>
                    </div>

                    <div id='favsModal' className='modal modalContent'>
                        <div>
                            <a href='#close' title='Close' className='close'>X</a>
                            <h2 className='modalTitle'>Your current Dread Pirate Eats favorites!</h2>
                            <form className='modalForm'>
                                <br />
                                <p><input type='checkbox' /> Favorite place #1 </p>
                                <p><input type='checkbox' /> Favorite place #2 </p>
                                <p><input type='checkbox' /> Favorite place #3 </p>
                                <p><input type='checkbox' /> Favorite place #4 </p>
                                <p><input type='checkbox' /> Favorite place #5 </p>

                                <p><a className='link' href='#delete'>[Delete Button]</a></p>

                                <br />

                                <h2>Add a new Favorite!</h2>

                                <p>Resturant Name:</p>
                                <input type='text' />
                                <p>Enter resturant city and state:</p>
                                <input type='text' />
                                <p><a className='link' href='#search'>[Search]</a></p>

                                <br />
                                <h2>Search Results</h2>

                                <p><input type='checkbox' /> Result #1 </p>
                                <p><input type='checkbox' /> Result #2 </p>

                                <p><a className='link' href='#add'>[Add Button]</a></p>

                            </form>
                        </div>
                    </div>
                </header>
            )
        }

    }

}


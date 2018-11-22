import React from 'react';
import { connect } from 'react-redux'
import { loginSuccess, signupUser } from './actions';

import './userLogin.css';

class UserLogin extends React.Component {

    loginSuccess(event) {
        event.preventDefault();

        this.props.dispatch(loginSuccess())
    }
    
    signUpScreen(event) {
        event.preventDefault();

        this.props.dispatch(signupUser())
    }

    render() {
        return (

            <div className='pirateImageSection'>
                <h2 className='loginTitle'>Login to Dread Pirate Eats!</h2>
                <form className='logInForm' onSubmit={event => this.loginSuccess(event)}>
                    <p>Enter your username:</p>
                    <input type='text' />
                    <br />
                    <p>Enter your password:</p>
                    <input type='text' />
                    <br /><br />
                    <button type='submit' name='submit' id='logInButton' className='logInButton'>Log In</button>
                </form>
                <p className='joinCrew'>Not a member of the crew?  <span id='signUpButton' className='signUpButton'
                    onClick={event => this.signUpScreen(event)}>[Join Now!]</span></p>
            </div>

        )
    }
}

export default connect()(UserLogin)

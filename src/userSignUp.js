import React from 'react';
import { connect } from 'react-redux'
import { loginSuccess, loginUser } from './actions';

import './userSignUp.css';

class UserSignUp extends React.Component {

    loginSuccess(event) {
        event.preventDefault();

        this.props.dispatch(loginSuccess())
    }
    
    userLogin(event) {
        event.preventDefault();

        this.props.dispatch(loginUser())
    }

    render() {
        return (

            <div className='pirateImageSection'>
                <h2 className='loginTitle'>Join thee crew!</h2>
                <form className='signUpForm'>
                    <p>Enter your username:</p>
                    <input type='text' />
                    <p>Enter your e-mail address:</p>
                    <input type='text' />
                    <p>Enter your password:</p>
                    <input type='text' />
                    <p>Confirm your password:</p>
                    <input type='text' />
                    <br /><br />
                    <button type='submit' name='submit' id='logInButton' className='logInButton'
                        onClick={event => this.loginSuccess(event)} >Join!</button>
                </form>
                <p className='joinCrew'>Already a member of the crew?  <span id='signUpButton' className='signUpButton'
                    onClick={event => this.userLogin(event)}>[Login Now!]</span></p>
            </div>
        )
    }
}

export default connect()(UserSignUp)

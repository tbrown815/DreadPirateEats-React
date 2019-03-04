import React from 'react';
import { connect } from 'react-redux'
import { REACT_APP_TEST_USERNAME, REACT_APP_TEST_PASSWORD } from '../config';
import { signupUser, userLogin, cancelState } from '../actions/actions';

import './userLogin.css';

export class UserLogin extends React.Component {

    loginCheck(event) {
        event.preventDefault();

        const username = this.username.value;
        const password = this.password.value;


        return this.props.dispatch(userLogin(username, password))
    }

    bypassLogin(event) {
        event.preventDefault();

        const username = REACT_APP_TEST_USERNAME
        const password = REACT_APP_TEST_PASSWORD

        return this.props.dispatch(userLogin(username, password))

    }


    signUpScreen(event) {
        event.preventDefault();

        this.props.dispatch(signupUser())
    }

    cancel(event) {
        event.preventDefault();

        this.props.dispatch(cancelState())
    }

    render() {
        return (

            <div className='loginSection'>
                <h2 className='userLoginTitle'>Login to Dread Pirate Eats!</h2>
                <form className='logInForm' id='logInForm' onSubmit={event => this.loginCheck(event)}>
                    <p className='loginFormText'>Enter your username:</p>
                    <input type='text' id='usernameField' name='username' className='usernameField' ref={username => (this.username = username)} />
                    <br />
                    <p className='loginFormText'>Enter your password:</p>
                    <input type='password' id='passwordField' name='password' className='passwordField' ref={password => (this.password = password)} />
                    <br /><br />
                    <span role='alert' id='errorMessage'>{this.props.errorMessage}</span>
                    <br /><br />
                    <button type='submit' name='submit' id='logInButton' className='logInButton'>Log In</button>
                </form>
                <p className='joinCrew loginFormText'>Not a member of the crew?</p>
                <button id='signUpButton' className='signUpButton'
                    onClick={event => this.signUpScreen(event)}>Join Now!</button>
                <p className='cancel'><button id='cancelButton' className='cancelButton' onClick={event => this.cancel(event)}>Cancel</button></p>
                <br />
                <p className='bypass'><button id='bypassButton' className='bypassButton'
                    onClick={event => this.bypassLogin(event)}>BYPASS LOGIN</button></p>
                <br />
                <p className='testData'>
                    <span>User test data:</span>
                    <br />
                    <span>Username: ricksanchez</span>
                    <br />
                    <span>Password: test9033</span>
                </p>

            </div>

        )
    }
}

const mapStateToProps = state => ({
    errorMessage: state.errorMessage

})

export default connect(mapStateToProps)(UserLogin)

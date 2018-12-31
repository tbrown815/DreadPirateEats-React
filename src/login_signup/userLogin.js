import React from 'react';
import { connect } from 'react-redux'
import { signupUser, userLogin, cancelState } from '../actions/actions';

import './userLogin.css';

class UserLogin extends React.Component {

    loginCheck(event) {
        event.preventDefault();

        const username = this.username.value;
        const password = this.password.value;


        return this.props.dispatch(userLogin(username, password))
    }

    bypassLogin(event) {
        event.preventDefault();

        const username = 'ricksanchez'
        const password = 'test9033'

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

            <div className='pirateImageSection'>
                <h2 className='userLoginTitle'>Login to Dread Pirate Eats!</h2>
                <form className='logInForm' id='logInForm' onSubmit={event => this.loginCheck(event)}>
                    <p className='loginFormText'>Enter your username:</p>
                    <input type='text' id='usernameField' name='username' id='username' ref={username => (this.username = username)} />
                    <br />
                    <p className='loginFormText'>Enter your password:</p>
                    <input type='password' id='passwordField' name='password' id='password' ref={password => (this.password = password)} />
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
                <p className='cancel'><button id='cancelButton' className='cancelButton'
                    onClick={event => this.bypassLogin(event)}>BYPASS LOGIN</button></p>

            </div>

        )
    }
}

const mapStateToProps = state => ({
    errorMessage: state.errorMessage

})

export default connect(mapStateToProps)(UserLogin)

import React from 'react';
import { connect } from 'react-redux'
import { loginSuccess, signupUser, userLogin, authTokenHandler, cancelState } from '../actions/actions';
//import { USER_LOGIN_URL } from './config'

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
                <h2 className='loginTitle'>Login to Dread Pirate Eats!</h2>
                <form className='logInForm' onSubmit={event => this.loginCheck(event)}>
                    <p>Enter your username:</p>
                    <input type='text' ref={username => (this.username = username)} />
                    <br />
                    <p>Enter your password:</p>
                    <input type='password' name='password' id='password' ref={password => (this.password = password)} />
                    <br /><br />
                    <span id='errorMessage'>{this.props.errorMessage}</span>
                    <br /><br />
                    <button type='submit' name='submit' id='logInButton' className='logInButton'>Log In</button>
                </form>
                <p className='joinCrew'>Not a member of the crew?  <span id='signUpButton' className='signUpButton'
                    onClick={event => this.signUpScreen(event)}>[Join Now!]</span></p>
                <p className='cancel'><button id='cancelButton' className='cancelButton'onClick={event => this.cancel(event)}>Cancel</button></p>  
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

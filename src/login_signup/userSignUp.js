// http://jesseharlin.net/
//https://coverr.co

import React from 'react';
import { connect } from 'react-redux'
import { loginUser, createUserCheck, cancelState } from '../actions/actions';
//import { CREATE_USER_URL } from './config'


import './userSignUp.css';

class UserSignUp extends React.Component {


/* NEW VALIDATIONS FROM SERVER */

userCheck(event) {
    event.preventDefault();

    const username = this.username.value;
    const email = this.email.value;
    const password = this.password.value;
    const passwordConf = this.passwordConf.value;

    return this.props.dispatch(createUserCheck(username, email, password, passwordConf))
}



    callUserLogin(event) {
        event.preventDefault();

        this.props.dispatch(loginUser())
    }

    cancel(event) {
        event.preventDefault();

        this.props.dispatch(cancelState())
    }

    render() {
        

                    
        return (



            <div className='pirateImageSection'>
                <h2 className='loginTitle'>Join thee crew!</h2>
                <form className='signUpForm' onSubmit={event => this.userCheck(event)}>
                    <p>Enter your username:</p>
                    <input type='text' ref={username => (this.username = username)} />
                    <p>Enter your e-mail address:</p>
                    <input type='text' ref={email => (this.email = email)} />
                    <p>Enter your password:</p>
                    <input type='password' name='password' id='password' ref={password => (this.password = password)} />
                    <p>Confirm your password:</p>
                    <input type='password' name='passwordConf' id='passwordConf' ref={passwordConf => (this.passwordConf = passwordConf)} />
                    <br /><br />
                    <span id='errorMessage'>{this.props.errorMessage}</span>
                    <br /><br />
                    <button type='submit' name='submit' id='joinButton' className='joinButton'>Join!</button>


                </form>
                <p className='joinCrew'>Already a member of the crew?</p>
                <button id='logInButton' className='logInButton'
                    onClick={event => this.callUserLogin(event)}>Login Now!</button>
                <p className='cancel'><button id='cancelButton' className='cancelButton'onClick={event => this.cancel(event)}>Cancel</button></p>                   

            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    errorMessage: state.errorMessage
  
  })

export default connect(mapStateToProps)(UserSignUp)

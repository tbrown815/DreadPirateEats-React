
import React from 'react';
import { connect } from 'react-redux'
import { loginUser, createUserCheck, cancelState } from '../actions/actions';


import './userSignUp.css';

export class UserSignUp extends React.Component {


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
                <h2 className='signupLoginTitle'>Join thee crew!</h2>
                <form className='signUpForm' id='signUpForm' onSubmit={event => this.userCheck(event)}>
                    <p className='signupFormText'>Enter your username:</p>
                    <input type='text' name='username' id='username' ref={username => (this.username = username)} />
                    <p className='signupFormText'>Enter your e-mail address:</p>
                    <input type='email' name='email' id='email' className='emailField' ref={email => (this.email = email)} />
                    <p className='signupFormText'>Enter your password:</p>
                    <input type='password' name='password' id='password' className='passwordField' ref={password => (this.password = password)} />
                    <p className='signupFormText'>Confirm your password:</p>
                    <input type='password' name='passwordConf' id='passwordConf' className='passwordConfField' ref={passwordConf => (this.passwordConf = passwordConf)} />
                    <br /><br />
                    <span id='errorMessage' role='alert'>{this.props.errorMessage}</span>
                    <br /><br />
                    <button type='submit' name='submit' id='joinButton' className='joinButton'>Join!</button>


                </form>
                <p className='joinCrew signupFormText'>Already a member of the crew?</p>
                <button id='logInButton' className='logInButton'
                    onClick={event => this.callUserLogin(event)}>Login Now!</button>
                <p className='cancel'><button id='cancelButton' className='cancelButton' onClick={event => this.cancel(event)}>Cancel</button></p>

            </div>

        )
    }
}
const mapStateToProps = state => ({
    errorMessage: state.errorMessage

})

export default connect(mapStateToProps)(UserSignUp)

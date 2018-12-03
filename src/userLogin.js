import React from 'react';
import { connect } from 'react-redux'
import { loginSuccess, signupUser, userLogin, authTokenHandler, cancelState } from './actions';
//import { USER_LOGIN_URL } from './config'

import './userLogin.css';

class UserLogin extends React.Component {

    loginCheck(event) {
        event.preventDefault();

        const username = this.username.value;
        const password = this.password.value;

        return this.props.dispatch(userLogin(username, password))

/*
        return fetch(`${USER_LOGIN_URL}`, {
            method: 'POST',
            body: JSON.stringify({username: `${userLoginObj.username}`, password: `${userLoginObj.password}`}),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => (console.log(res.json({PromiseValue: Object.authToken}))))
       // .then(({authToken}) => authTokenHandler(authToken))
        .then(res => {
            if(!res.ok){
                return res.json().then(err => Promise.reject(err));
            }
            
            console.log('authToken state: ', this.state.authToken)

           // this.props.dispatch(authTokenHandler(authToken))
            //userLoginObj.userToken = res.body.authToken
             
    
             //this.props.dispatch(loginSuccess(userLoginObj))
    
         })
         .catch(err => {
             const {reason, message, location} = err;
           //  let cleanLocation = location.charAt(0).toUpperCase() + location.slice(1);
             if(reason === 'ERROR') {
                 return Promise.reject(
                     document.getElementById('errorMessage').innerHTML=`${location} ${message}`
    
               )
           }
       })
*/
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
            </div>

        )
    }
}

const mapStateToProps = state => ({
    errorMessage: state.errorMessage
  
  })

export default connect(mapStateToProps)(UserLogin)

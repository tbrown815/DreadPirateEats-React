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
/*
    const userObj = {
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
        passwordConf: this.passwordConf.value
    }
*/
    return this.props.dispatch(createUserCheck(username, email, password, passwordConf))


/*
    return fetch(`${CREATE_USER_URL}`, {
        method: 'POST',
        body: JSON.stringify({username: `${userObj.username}`, email: `${userObj.email}`, password: `${userObj.password}`, password_Confirmation: `${userObj.passwordConf}`}),
        headers: {'Content-Type': 'application/json'}
    })
    
    .then(res => {
        if(!res.ok){
             return res.json().then(err => Promise.reject(err));
         }

         this.props.dispatch(createUser(userObj))

     })
     .catch(err => {
         const {reason, message, location} = err;
         let cleanLocation = location.charAt(0).toUpperCase() + location.slice(1);
         if(reason === 'ERROR') {
             return Promise.reject(
                 document.getElementById('errorMessage').innerHTML=`${cleanLocation} ${message}`

           )
       }
   })
*/

}



/* OLD CLIENT VALIDATION */
/*
    userCheck(event) {
        event.preventDefault();

        const username = this.username.value;
        const email = this.email.value;
        const password = this.password.value;
        const passwordConf = this.passwordConf.value;

        const userObj = {
            username: this.username.value,
            email: this.email.value,
            password: this.password.value,
            passwordConf: this.passwordConf.value
        }

        if(username === ''){
            document.getElementById('alertMessage').style.color='red'
            document.getElementById('alertMessage').innerHTML='Please enter a username!'
        }
        else if(username === password) {
            document.getElementById('alertMessage').style.color='red'
            document.getElementById('alertMessage').innerHTML='username must be different than your password!'  
        }
        else{
            if(username.length > 7 && username.length < 31) {
                document.getElementById('alertMessage').style.color='green'
                document.getElementById('alertMessage').innerHTML=''  
                
                this.passCheck(userObj)
            }
            else{
                document.getElementById('alertMessage').style.color='red'
                document.getElementById('alertMessage').innerHTML='username should be between 8 and 30 characters!'   
            }
        }
    }

    passCheck(userObj) {

            let password = userObj.password;
            let passwordConf = userObj.passwordConf;
   
            if(password === '' && passwordConf === '') {
                document.getElementById('alertMessage').style.color='red'
                document.getElementById('alertMessage').innerHTML='Please enter a password!'
                
            }

            else if(password === passwordConf) {
                    document.getElementById('alertMessage').style.color='green'
                    document.getElementById('alertMessage').innerHTML='passwords match!'
                    
                    if(password.length > 7 && password.length < 61) {

                       this.callCreateUser(userObj)

                    }
                    else{
                        document.getElementById('alertMessage').style.color='red'
                        document.getElementById('alertMessage').innerHTML='passwords should be between 8 and 60 characters!'   
                    }
                    
                }

            else{
                document.getElementById('alertMessage').style.color='red'
                document.getElementById('alertMessage').innerHTML='passwords do not match!'  

            }
    }


    callCreateUser(userObj) {

       return fetch(`${CREATE_USER_URL}`, {
           method: 'POST',
           body: JSON.stringify({username: `${userObj.username}`, email: `${userObj.email}`, password: `${userObj.password}`}),
           headers: {'Content-Type': 'application/json'}
       })
       
       .then(res => {
           if(!res.ok){
                return res.json().then(err => Promise.reject(err));
            }

            this.props.dispatch(createUser(userObj))

        })
        .catch(err => {
            const {reason, message} = err;
            if(reason === 'ERROR') {
                return Promise.reject(
                    document.getElementById('errorMessage').style.color='red',
                    document.getElementById('errorMessage').innerHTML=`${message}`

              )
          }
      })
      
    }
*/
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
                    {/*<span id='alertMessage'></span>  <br /> */}
                    <span id='errorMessage'>{this.props.errorMessage}</span>
                    <br /><br />
                    <button type='submit' name='submit' id='joinButton' className='joinButton'>Join!</button>


                </form>
                <p className='joinCrew'>Already a member of the crew?  <span id='logInButton' className='logInButton'
                    onClick={event => this.callUserLogin(event)}>[Login Now!]</span></p>
                <p className='cancel'><button id='cancelButton' className='cancelButton'onClick={event => this.cancel(event)}>Cancel</button></p>                   

            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    errorMessage: state.errorMessage
  
  })

export default connect(mapStateToProps)(UserSignUp)

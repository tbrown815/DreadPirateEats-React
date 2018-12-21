import jwtDecode from 'jwt-decode';

import { REACT_APP_USER_LOGIN_URL, REACT_APP_CREATE_USER_URL } from './config';

import { storeAuthToken, clearAuthToken, storeUserToken, clearUserToken } from './localStore';

require('dotenv').config();


export const FIND_GRUB = 'FIND_GRUB'
export const findGrub = () => ({
    type: FIND_GRUB
})

export const RESTART_APP = 'RESTART_APP'
export const restartApp = () => ({
    type: RESTART_APP
})

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
})

export const LOGIN_USER = 'LOGIN_USER'
export const loginUser = () => ({
    type: LOGIN_USER
})

export const SIGNUP_USER = 'SIGNUP_USER'
export const signupUser = () => ({
    type: SIGNUP_USER
})

export const RETURN_TO_GAME = 'RETURN_TO_GAME'
export const returnToGame = () => ({
    type: RETURN_TO_GAME
})

//CAN DELETE IF WILL NOT USE
export const CREATE_NEW_USER = 'CREATE_NEW_USER'
export const createNewUser = (userObj) => ({
    type: CREATE_NEW_USER,
    userObj: userObj
})

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginSuccess = currentUser => ({
    type: LOGIN_SUCCESS,
    currentUser: currentUser
})

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
})

export const ERROR_STATE = 'ERROR_STATE'
export const setErrorState = errorMessage => ({
    type: ERROR_STATE,
    errorMessage
})

export const CANCEL_STATE = 'CANCEL_STATE'
export const cancelState = () => ({
    type: CANCEL_STATE
})



export const userLogin = (username, password) => dispatch => {
    console.log('username: ', username)
    console.log('password: ', password)

    if (username === undefined || username === null || username === '') {

        dispatch(setErrorState('Please enter your username.'))
    }

    else if (password === undefined || password === null || password === '') {

        dispatch(setErrorState('Please enter your password.'))
    }

    else {
        return fetch(`${REACT_APP_USER_LOGIN_URL}`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(({ authToken }) => setTokenHandler(authToken, dispatch))
            .catch(err => {

                dispatch(setErrorState('Unable to authorize access! Please try again.'))

            })
    }

}   // END USERLOGIN

const setTokenHandler = (authToken, dispatch) => {
    console.log('setToken: ', authToken)
    const decodedToken = jwtDecode(authToken)
    dispatch(setAuthToken(authToken))
    dispatch(setErrorState('Login successful, please standby.'))
    dispatch(loginSuccess(decodedToken.user))
    storeAuthToken(authToken)
    storeUserToken(decodedToken.user.id)
};


export const logoutUser = () => dispatch => {

    clearAuthToken()
    clearUserToken()
    dispatch(logoutSuccess())
}


export const createUserCheck = (username, email, password, passwordConf) => dispatch => {
    console.log('createUserCheck')
    console.log('username: ', username)
    console.log('email: ', email)
    console.log('password: ', password)
    console.log('passwordConf: ', passwordConf)


    if (username === undefined || username === null || username === '') {

        dispatch(setErrorState('Please enter a username.'))
    }

    else if (password === undefined || password === null || password === '') {

        dispatch(setErrorState('Please enter your password.'))
    }


    if (username === '') {
        dispatch(setErrorState('Please enter a username.'))

    }
    else if (username === password) {
        dispatch(setErrorState('Username must be different than your password!'))
    }
    else {
        if (username.length > 7 && username.length < 31) {

            dispatch(createPassCheck(username, email, password, passwordConf))
        }
        else {
            dispatch(setErrorState('Username should be between 8 and 30 characters!'))
        }
    }

} //END createUserCheck

export const createPassCheck = (username, email, password, passwordConf) => dispatch => {
    console.log('createPassCheck')
    console.log('username: ', username)
    console.log('email: ', email)
    console.log('password: ', password)
    console.log('passwordConf: ', passwordConf)

    if (password === '' && passwordConf === '') {

        dispatch(setErrorState('Please enter a password!'))

    }

    else if (password === passwordConf) {

        dispatch(setErrorState('Passwords match!'))

        if (password.length > 7 && password.length < 61) {

            dispatch(createUserFlow(username, email, password))

        }
        else {
            dispatch(setErrorState('Passwords should be between 8 and 60 characters!'))

        }

    }

    else {
        dispatch(setErrorState('Passwords do not match!'))
    }
} //END createPassCheck

export const createUserFlow = (username, email, password) => dispatch => {
    console.log('createPassCheck')
    console.log('username: ', username)
    console.log('email: ', email)
    console.log('password: ', password)

    return fetch(`${REACT_APP_CREATE_USER_URL}`, {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(res => {
            if (res.reason === 'ERROR') {
                console.log('ERROR')

                return dispatch(setErrorState(`${res.location} ${res.message}`))
            }
            else {
                setTokenHandler(res.authToken, dispatch)
            }
        })
        .catch(err => {

            dispatch(setErrorState('Something went wrong! Please try again later.'))

        })
} //END createUserFlow

import jwtDecode from 'jwt-decode';

import { REACT_APP_USER_LOGIN_URL, REACT_APP_CREATE_USER_URL } from '../config';

import { storeAuthToken, clearAuthToken, storeUserToken, clearUserToken } from '../localStore';

require('dotenv').config();

export const GUEST_LOGIN = 'GUEST_LOGIN'
export const guestLogin = () => ({
    type: GUEST_LOGIN
})

export const GUEST_SUCCESS = 'GUEST_SUCCESS'
export const guestSuccess = () => ({
    type: GUEST_SUCCESS
})

export const ERROR_STATE = 'ERROR_STATE'
export const setErrorState = errorMessage => ({
    type: ERROR_STATE,
    errorMessage
})

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
})



export const guestLoginCall = (username, password, userLocation) => dispatch => {
    console.log('username: ', username)
    console.log('password: ', password)

    if (userLocation === undefined || userLocation === null || userLocation === '') {

        dispatch(setErrorState('Please enter your location.'))
    }

    else {
        return fetch(`${REACT_APP_USER_LOGIN_URL}`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(({ authToken }) => setTokenHandler(authToken, dispatch, userLocation))
            .catch(err => {

                dispatch(setErrorState('Unable to authorize access! Please try again.'))

            })
    }

}   // END USERLOGIN

const getGrubJoints = (userLocation) => dispatch => {
    dispatch(setErrorState('getGrubJoints'))
    
    //Will need to create action that is cross of callViewFavs and performYelpCall
        //call performYelpCall, then callViewFavs to store returned values to state
    
    
    dispatch(guestSuccess())
    

}

const setTokenHandler = (authToken, dispatch, userLocation) => {
    console.log('setToken: ', authToken)
    const decodedToken = jwtDecode(authToken)
    dispatch(setAuthToken(authToken))
    dispatch(setErrorState('Login successful, please standby.'))
    dispatch(guestLogin(decodedToken.user))
    dispatch(getGrubJoints(userLocation, dispatch))
    storeAuthToken(authToken)
    storeUserToken(decodedToken.user.id)
};
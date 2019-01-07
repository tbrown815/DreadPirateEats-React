import {
    LOGOUT_SUCCESS, logoutSuccess, LOGIN_USER, loginUser, SIGNUP_USER, signupUser, RETURN_TO_GAME, returnToGame, 
    DISPLAY_ABOUT, displayAbout, CANCEL_ABOUT, cancelAbout, LOGIN_SUCCESS, loginSuccess, SET_AUTH_TOKEN, setAuthToken,
    ERROR_STATE, setErrorState, CANCEL_STATE, cancelState
    } from '../actions/actions'

describe('action test', () => {

    it('Return LOGOUT_SUCCESS', () => {
        const action = logoutSuccess()

        expect(action.type).toEqual(LOGOUT_SUCCESS)
    })

    it('Return LOGIN_USER', () => {
        const action = loginUser()

        expect(action.type).toEqual(LOGIN_USER)
    })

    it('Return SIGNUP_USER', () => {
        const action = signupUser()

        expect(action.type).toEqual(SIGNUP_USER)
    })

    it('Return RETURN_TO_GAME', () => {
        const action = returnToGame()

        expect(action.type).toEqual(RETURN_TO_GAME)
    })

    it('Return DISPLAY_ABOUT oldLoginState', () => {
        const oldLoginState = 1
        const action = displayAbout(oldLoginState)

        expect(action.type).toEqual(DISPLAY_ABOUT)
        expect(action.oldLoginState).toEqual(oldLoginState)
    })

    it('Return CANCEL_ABOUT oldLoginState', () => {
        const oldLoginState = 1
        const action = cancelAbout(oldLoginState)

        expect(action.type).toEqual(CANCEL_ABOUT)
        expect(action.oldLoginState).toEqual(oldLoginState)
    })

    it('Return LOGIN_SUCCESS currentUser', () => {
        const currentUser = {id: "5c298521c24ad70017da3cda", username: "ricksanchez", email: "ricksanchez@test.com"}
        const action = loginSuccess(currentUser)

        expect(action.type).toEqual(LOGIN_SUCCESS)
        expect(action.currentUser).toEqual(currentUser)
    })

    it('Return SET_AUTH_TOKEN authToken', () => {
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMyOTg1MjFjMjRhZDcwMDE3ZGEzY2RhIiwidXNlcm5hbWUiOiJyaWNrc2FuY2hleiIsImVtYWlsIjoicmlja3NhbmNoZXpAdGVzdC5jb20ifSwiaWF0IjoxNTQ2NTY4NzM3LCJleHAiOjE1NDcwMDA3MzcsInN1YiI6InJpY2tzYW5jaGV6In0.8i7zIOY1RTw4m58woD6J_OkC3F1UO57Zp6pMtsHyfW4'
        const action = setAuthToken(authToken)

        expect(action.type).toEqual(SET_AUTH_TOKEN)
        expect(action.authToken).toEqual(authToken)
    })

    it('Return ERROR_STATE setErrorState', () => {
        const errorMessage = 'This is a test error!'
        const action = setErrorState(errorMessage)

        expect(action.type).toEqual(ERROR_STATE)
        expect(action.errorMessage).toEqual(errorMessage)
    })

    it('Return CANCEL_STATE', () => {
        const action = cancelState()

        expect(action.type).toEqual(CANCEL_STATE)
    })
})
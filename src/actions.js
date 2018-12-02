

export const FIND_GRUB = 'FIND_GRUB'
export const findGrub = () => ({
    type: FIND_GRUB
})

export const RESTART_APP = 'RESTART_APP'
export const restartApp = () => ({
    type: RESTART_APP
})

export const LOGOUT_USER = 'LOGOUT_USER'
export const logoutUser = () => ({
    type: LOGOUT_USER
})

export const LOGIN_USER = 'LOGIN_USER'
export const loginUser = () => ({
    type: LOGIN_USER
})

export const SIGNUP_USER = 'SIGNUP_USER'
export const signupUser = () => ({
    type: SIGNUP_USER
})

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginSuccess = (userLoginObj) => ({
    type: LOGIN_SUCCESS,
    userLoginObj: userLoginObj
})

export const CREATE_USER = 'CREATE_USER'
export const createUser = (userObj) => ({
    type: CREATE_USER,
    userObj: userObj
})
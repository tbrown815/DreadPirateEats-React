import {
    LOGIN_USER, LOGOUT_SUCCESS, SIGNUP_USER, RETURN_TO_GAME, DISPLAY_ABOUT, CANCEL_ABOUT,
    LOGIN_SUCCESS, SET_AUTH_TOKEN, ERROR_STATE, CANCEL_STATE
} from '../actions/actions'

import {
    EDIT_FAVS, SEARCH_NEW_FAVS, DISPLAY_NEW_FAVS, SET_SELECTED_FAV, CANCEL_SEARCH_FAVS, VIEW_FAVS, CANCEL_ADD_FAVS,
    NO_FAVS, EDIT_FAVS_STATE, CANCEL_EDIT_FAVS
} from '../actions/favActions'

import { FIND_GRUB } from '../actions/grubActions'

import { GUEST_LOGIN, GUEST_SUCCESS, GUEST_FIND_GRUB, GUEST_RESET } from '../actions/guestActions'

/*LOGGEDIN STATE*/
/*
1 = User login displayed
2 = User sign up displayed -> on successful creation state moves to 3
3 = Valid user is logged in
4 = User favorites are displayed
5 = Guest "login"
6 = User is Guest
7 = Display About
*/

const initialState = {
    grubJoints: [],
    numJoints: 0,
    madeOffers: [],
    theOffer: '',
    hangryTaunt: 'Click ta draw ya scallywag!',
    randomCheck: ['x'],
    restart: false,
    loggedIn: 0,
    favState: 0,
    editFavState: 0,
    editFavOjb: null,
    newFavorites: [],
    isHidden: true,
    selectedFavorite: null,
    authToken: null,
    userToken: null,
    currentUser: null,
    errorMessage: null,
    noFavsMessage: null,
    userMessage: null,
    prevLoggedIn: 0,
    publicJoints: [],
    publicNumJoints: 0,
    publicMadeOffers: [],
    publicTheOffer: '',
    publicSort: ['rating', 'review_count', 'distance'],
    publicRestart: false,
    publicDrawCount: 0,
    publicHangryTaunt: 'Click ta draw ya scallywag!'

}

export default (state = initialState, action) => {

    //NO LONGER USED COULD DELETE
    /* 
       if (action.type === RESTART_APP) {
           return Object.assign({}, state, {
               madeOffers: [],
               theOffer: '',
               randomCheck: ['x'],
               hangryTaunt: 'Click ta draw ya scallywag!',
               gameOn: true,
               restart: false,
               newFavorites: null
           })
       }
   */
    if (action.type === LOGOUT_SUCCESS) {
        console.log('LOGOUT_SUCCESS')
        return Object.assign({}, state, {
            grubJoints: [],
            numJoints: 0,
            madeOffers: [],
            theOffer: '',
            restart: false,
            randomCheck: ['x'],
            hangryTaunt: 'Click ta draw ya scallywag!',
            publicSort: ['rating', 'review_count', 'distance'],
            loggedIn: 0,
            prevLoggedIn: 0,
            favState: 0,
            editFavState: 0,
            newFavorites: [],
            isHidden: true,
            selectedFavorite: null,
            authToken: null,
            userToken: null,
            currentUser: null,
            errorMessage: null,
            noFavsMessage: null,
            userMessage: null
        })
    }

    if (action.type === LOGIN_USER) {
        console.log('LOGIN_USER')

        return Object.assign({}, state, {
            loggedIn: 1
        })
    }

    if (action.type === GUEST_LOGIN) {
        console.log('GUEST_LOGIN')

        return Object.assign({}, state, {
            loggedIn: 5
        })
    }

    if (action.type === GUEST_SUCCESS) {
        console.log('GUEST_SUCCESS')

        return Object.assign({}, state, {
            loggedIn: 6,
            prevLoggedIn: 0,
            publicJoints: action.guestFavState,
            noFavsMessage: null,
            publicNumJoints: action.publicNumJoints,
            publicMadeOffers: [],
            publicTheOffer: '',
            randomCheck: ['x'],
            publicHangryTaunt: 'Click ta draw ya scallywag!',
            publicRestart: false,
            publicDrawCount: 0
        })
    }

    if (action.type === GUEST_RESET) {
        console.log('GUEST_RESET')

        return Object.assign({}, state, {
            loggedIn: 5,
            prevLoggedIn: 0,
            publicJoints: action.guestFavState,
            noFavsMessage: null,
            publicNumJoints: action.publicNumJoints,
            publicMadeOffers: [],
            publicTheOffer: '',
            randomCheck: ['x'],
            publicHangryTaunt: 'Click ta draw ya scallywag!',
            publicRestart: false,
            publicDrawCount: 0
        })
    }

    if (action.type === DISPLAY_ABOUT) {
        console.log('DISPLAY_ABOUT')

        return Object.assign({}, state, {
            loggedIn: 7,
            prevLoggedIn: action.oldLoginState

        })
    }

    if (action.type === CANCEL_ABOUT) {
        console.log('CANCEL_ABOUT')

        return Object.assign({}, state, {
            loggedIn: action.oldLoginState
        })
    }

    if (action.type === SIGNUP_USER) {
        console.log('SIGNUP_USER')

        return Object.assign({}, state, {
            loggedIn: 2
        })
    }

    if (action.type === LOGIN_SUCCESS) {
        console.log('LOGIN_SUCCESS')
        console.log('currentUser LS: ', action.currentUser)

        return Object.assign({}, state, {
            currentUser: action.currentUser,
            userToken: action.currentUser.id,
            publicSort: ['rating'],
            loggedIn: 3,
            errorMessage: null

        })
    }

    if (action.type === SEARCH_NEW_FAVS) {
        console.log('SEARCH_NEW_FAVS')

        return Object.assign({}, state, {
            favState: 1,
            errorMessage: null

        })
    }

    if (action.type === DISPLAY_NEW_FAVS) {
        console.log('DISPLAY_NEW_FAVS')

        return Object.assign({}, state, {
            newFavorites: action.displayResults,
            userMessage: action.userMessage

        })
    }

    if (action.type === VIEW_FAVS) {
        console.log('VIEW_FAVS')

        return Object.assign({}, state, {
            grubJoints: action.displayFavs,
            noFavsMessage: null,
            editFavState: 0,
            selectedFavorite: null,
            numJoints: action.numJoints,
            madeOffers: [],
            theOffer: '',
            randomCheck: ['x'],
            hangryTaunt: 'Click ta draw ya scallywag!',
            restart: false,
            newFavorites: []
        })
    }

    if (action.type === SET_SELECTED_FAV) {
        console.log('SET_SELECTED_FAV')

        return Object.assign({}, state, {
            selectedFavorite: action.selectedFav
        })
    }

    if (action.type === CANCEL_ADD_FAVS) {
        console.log('CANCEL_ADD_FAVS')

        return Object.assign({}, state, {
            favState: 0,
            errorMessage: null
        })
    }

    if (action.type === EDIT_FAVS) {
        console.log('EDIT_FAVS')

        return Object.assign({}, state, {
            loggedIn: 4
        })
    }

    if (action.type === EDIT_FAVS_STATE) {
        console.log('EDIT_FAVS_STATE')

        return Object.assign({}, state, {
            editFavState: 1,
            editFavOjb: action.favOjb,
            errorMessage: null
        })
    }

    if (action.type === CANCEL_EDIT_FAVS) {
        console.log('CANCEL_ADD_FAVS')

        return Object.assign({}, state, {
            editFavState: 0,
            selectedFavorite: null

        })
    }

    if (action.type === CANCEL_SEARCH_FAVS) {
        console.log('CANCEL_SEARCH_FAVS')

        return Object.assign({}, state, {
            favState: 0
        })
    }

    if (action.type === RETURN_TO_GAME) {
        console.log('RETURN_TO_GAME')

        return Object.assign({}, state, {
            loggedIn: 3
        })
    }
    if (action.type === SET_AUTH_TOKEN) {
        console.log('SET_AUTH_TOKEN')

        return Object.assign({}, state, {
            authToken: action.authToken
        })
    }

    if (action.type === ERROR_STATE) {
        console.log('ERROR_STATE')

        return Object.assign({}, state, {
            errorMessage: action.errorMessage
        })
    }

    if (action.type === CANCEL_STATE) {
        console.log('CANCEL_STATE')

        return Object.assign({}, state, {
            loggedIn: 0
        })
    }

    if (action.type === NO_FAVS) {
        console.log('NO_FAVS')

        return Object.assign({}, state, {
            noFavsMessage: action.noFavs
        })
    }

    if (action.type === FIND_GRUB) {
        console.log('FIND_GRUB')

        return Object.assign({}, state, {
            hangryTaunt: action.hangryTaunt,
            madeOffers: action.madeOffers,
            restart: action.restart,
            randomCheck: action.randomCheck
        })
    }

    if (action.type === GUEST_FIND_GRUB) {
        console.log('GUEST_FIND_GRUB')

        return Object.assign({}, state, {
            publicHangryTaunt: action.publicHangryTaunt,
            publicMadeOffers: action.publicMadeOffers,
            publicRestart: action.publicRestart,
            publicTheOffer: action.publicTheOffer
        })
    }
    return state;

} //end of export

//function for error message alert display
function errFunc(xhr) {
    return alert(`${xhr.responseJSON.reason}: ${xhr.responseJSON.location} ${xhr.responseJSON.message}`)
}
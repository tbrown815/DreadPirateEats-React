import {
    LOGIN_USER, LOGOUT_SUCCESS, SIGNUP_USER, RETURN_TO_GAME, DISPLAY_ABOUT, CANCEL_ABOUT,
    LOGIN_SUCCESS, SET_AUTH_TOKEN, ERROR_STATE, CANCEL_STATE, SPINNER
} from '../actions/actions'

import {
    EDIT_FAVS, SEARCH_NEW_FAVS, DISPLAY_NEW_FAVS, SET_SELECTED_FAV, CANCEL_SEARCH_FAVS, VIEW_FAVS, CANCEL_ADD_FAVS,
    NO_FAVS, EDIT_FAVS_STATE, CANCEL_EDIT_FAVS
} from '../actions/favActions'

import { FIND_GRUB } from '../actions/grubActions'

import { GUEST_LOGIN, GUEST_SUCCESS, GUEST_FIND_GRUB, GUEST_RESET } from '../actions/guestActions'

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
    publicHangryTaunt: 'Click ta draw ya scallywag!',
    spinner: false

}

export default (state = initialState, action) => {
    //set state values on logout
    if (action.type === LOGOUT_SUCCESS) {
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
    //set login state for login page
    if (action.type === LOGIN_USER) {

        return Object.assign({}, state, {
            loggedIn: 1
        })
    }
    //set login state for guest start page (enter zip)
    if (action.type === GUEST_LOGIN) {

        return Object.assign({}, state, {
            loggedIn: 5
        })
    }
    //set state for guest game page
    if (action.type === GUEST_SUCCESS) {

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
    //reset state for guest game
    if (action.type === GUEST_RESET) {

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
    //set loggedIn state to display about and record previous state
    if (action.type === DISPLAY_ABOUT) {

        return Object.assign({}, state, {
            loggedIn: 7,
            prevLoggedIn: action.oldLoginState

        })
    }
    //sets loggedIn state to previous state when leaving about page
    if (action.type === CANCEL_ABOUT) {

        return Object.assign({}, state, {
            loggedIn: action.oldLoginState
        })
    }
    //set loggedIn state to display sign up page
    if (action.type === SIGNUP_USER) {

        return Object.assign({}, state, {
            loggedIn: 2
        })
    }
    //set loggedIn state for successful login to play game
    if (action.type === LOGIN_SUCCESS) {

        return Object.assign({}, state, {
            currentUser: action.currentUser,
            userToken: action.currentUser.id,
            publicSort: ['rating'],
            loggedIn: 3,
            errorMessage: null

        })
    }
    //set favState to search for new favs
    if (action.type === SEARCH_NEW_FAVS) {

        return Object.assign({}, state, {
            favState: 1,
            errorMessage: null

        })
    }
    //set state to display new favs from search
    if (action.type === DISPLAY_NEW_FAVS) {

        return Object.assign({}, state, {
            newFavorites: action.displayResults,
            userMessage: action.userMessage,
            spinner: false

        })
    }
    //set state to display users existing favs
    if (action.type === VIEW_FAVS) {

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
            newFavorites: [],
            spinner: false
        })
    }
    //set state to record fav selected on radio click
    if (action.type === SET_SELECTED_FAV) {

        return Object.assign({}, state, {
            selectedFavorite: action.selectedFav
        })
    }
    //cancels add favs state
    if (action.type === CANCEL_ADD_FAVS) {

        return Object.assign({}, state, {
            favState: 0,
            errorMessage: null,
            spinner: false
        })
    }
    //set loggedIn state to display user favs
    if (action.type === EDIT_FAVS) {

        return Object.assign({}, state, {
            loggedIn: 4
        })
    }
    //set edit favs state for editing user favs
    if (action.type === EDIT_FAVS_STATE) {

        return Object.assign({}, state, {
            editFavState: 1,
            editFavOjb: action.favOjb,
            errorMessage: null,
            spinner: false
        })
    }
    //cancel edit favs 
    if (action.type === CANCEL_EDIT_FAVS) {

        return Object.assign({}, state, {
            editFavState: 0,
            selectedFavorite: null,
            spinner: false

        })
    }
    //cancel search favs
    if (action.type === CANCEL_SEARCH_FAVS) {

        return Object.assign({}, state, {
            favState: 0
        })
    }
    //set loggedIn state to return to game
    if (action.type === RETURN_TO_GAME) {

        return Object.assign({}, state, {
            loggedIn: 3
        })
    }
    //sets user auth token to state
    if (action.type === SET_AUTH_TOKEN) {

        return Object.assign({}, state, {
            authToken: action.authToken
        })
    }
    //set state for error messages
    if (action.type === ERROR_STATE) {

        return Object.assign({}, state, {
            errorMessage: action.errorMessage,
            spinner: false

        })
    }
    //cancel sets loggedIn back to default state
    if (action.type === CANCEL_STATE) {

        return Object.assign({}, state, {
            loggedIn: 0
        })
    }
    //sets state to display message when no user favs available
    if (action.type === NO_FAVS) {

        return Object.assign({}, state, {
            noFavsMessage: action.noFavs,
            spinner: false
        })
    }
    //sets state values for display/management of users game
    if (action.type === FIND_GRUB) {

        return Object.assign({}, state, {
            hangryTaunt: action.hangryTaunt,
            madeOffers: action.madeOffers,
            restart: action.restart,
            randomCheck: action.randomCheck
        })
    }
    //sets state values for display/management of guest game
    if (action.type === GUEST_FIND_GRUB) {

        return Object.assign({}, state, {
            publicHangryTaunt: action.publicHangryTaunt,
            publicMadeOffers: action.publicMadeOffers,
            publicRestart: action.publicRestart,
            publicTheOffer: action.publicTheOffer
        })
    }

    //enables or disables "spinner"
    if (action.type === SPINNER) {
        
        return Object.assign({}, state, {
            spinner: !state.spinner
        })
    }


    return state;

} //end of export

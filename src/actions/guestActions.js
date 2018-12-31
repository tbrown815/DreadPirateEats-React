
import { REACT_APP_FAV_SEARCH_DETAIL_URL } from '../config';

import { noFavsError } from './favActions'

require('dotenv').config();

export const GUEST_LOGIN = 'GUEST_LOGIN'
export const guestLogin = () => ({
    type: GUEST_LOGIN
})

export const GUEST_SUCCESS = 'GUEST_SUCCESS'
export const guestSuccess = (guestFavState, publicNumJoints) => ({
    type: GUEST_SUCCESS,
    guestFavState,
    publicNumJoints
})

export const GUEST_RESET = 'GUEST_RESET'
export const resetGuestState = authToken => ({
    type: GUEST_RESET,

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

export const GUEST_FIND_GRUB = 'GUEST_FIND_GRUB'
export const publicFindGrub = (publicHangryTaunt, publicMadeOffers, publicRestart, publicTheOffer) => ({
    type: GUEST_FIND_GRUB,
    publicHangryTaunt: publicHangryTaunt,
    publicMadeOffers: publicMadeOffers,
    publicRestart: publicRestart,
    publicTheOffer: publicTheOffer

})


export const guestLoginCall = (userLocation, sortForPub) => dispatch => {


    if (userLocation === undefined || userLocation === null || userLocation === '') {

        dispatch(setErrorState('Please enter your location.'))
    }

    else {

        let restaurantZip = userLocation;
        let publicSort = sortForPub;
        let restaurantName = ''

        return fetch(`${REACT_APP_FAV_SEARCH_DETAIL_URL}`, {
            method: 'POST',
            body: JSON.stringify({ restaurantZip, publicSort, restaurantName }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(({ businesses }) => mapResultsHandler(businesses, dispatch))
    }

}   // END guestLoginCall

const mapResultsHandler = (businesses, dispatch) => {

    console.log('businesses: ', businesses)

    let results = businesses.map(business => ({
        restaurantYelpId: business.id, url: business.url, restaurantName: business.name,
        address: business.location.address1, city: business.location.city, cost: business.price, restaurantAlias: business.alias
    }))

    let guestFavs = [];

    let loopLength;


    if (businesses.length < 1) {
        let userMessage = '0 Results - Please refine your search'

        dispatch(noFavsError(userMessage))

    }

    else if (businesses.length > 6) {
        loopLength = businesses.length;
    }

    for (let i = 0; i < loopLength; i++) {

        guestFavs = [...guestFavs, results[i]]

    }

    dispatch(saveGuestFavs(guestFavs))
}// END mapRESULTS

const saveGuestFavs = (guestFavs) => dispatch => {


    let guestFavState = guestFavs.map(guestFav => ({ restaurantName: guestFav.restaurantName, address: guestFav.address, city: guestFav.city, url: guestFav.url }))

    let publicNumJoints = guestFavState.length
    console.log('guestFavState: ', guestFavState)

    dispatch(guestSuccess(guestFavState, publicNumJoints))
}

export const publicGrubSearch = (publicHangryTaunt, publicMadeOffers, publicRestart, publicTheOffer) => dispatch => {
    console.log('publicGrubSearch CALLED')

    dispatch(publicFindGrub(publicHangryTaunt, publicMadeOffers, publicRestart, publicTheOffer))
}


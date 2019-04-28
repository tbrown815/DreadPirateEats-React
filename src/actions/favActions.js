
import { REACT_APP_FAVS_URL, REACT_APP_FAV_SEARCH_DETAIL_URL, REACT_APP_USERFAVS_URL } from '../config';
import { setErrorState, spinner } from './actions'

require('dotenv').config();

export const VIEW_FAVS = 'VIEW_FAVS'
export const viewFavs = (displayFavs, numJoints) => ({
    type: VIEW_FAVS,
    displayFavs,
    numJoints
})

export const EDIT_FAVS = 'EDIT_FAVS'
export const editFavs = () => ({
    type: EDIT_FAVS
})

export const EDIT_FAVS_STATE = 'EDIT_FAVS_STATE'
export const editFavsState = (favOjb) => ({
    type: EDIT_FAVS_STATE,
    favOjb
})

export const CANCEL_EDIT_FAVS = 'CANCEL_EDIT_FAVS'
export const cancelEditFavs = () => ({
    type: CANCEL_EDIT_FAVS
})

export const CANCEL_ADD_FAVS = 'CANCEL_ADD_FAVS'
export const cancelAddFavs = () => ({
    type: CANCEL_ADD_FAVS
})

export const SEARCH_NEW_FAVS = 'SEARCH_NEW_FAVS'
export const searchNewFavs = () => ({
    type: SEARCH_NEW_FAVS
})

export const DISPLAY_NEW_FAVS = 'DISPLAY_NEW_FAVS'
export const displayNewFavs = (displayResults, userMessage) => ({
    type: DISPLAY_NEW_FAVS,
    displayResults,
    userMessage
})

export const SET_SELECTED_FAV = 'SET_SELECTED_FAV'
export const setSelectedFav = (selectedFav) => ({
    type: SET_SELECTED_FAV,
    selectedFav
})

export const CANCEL_SEARCH_FAVS = 'CANCEL_SEARCH_FAVS'
export const cancelSearchFavs = () => ({
    type: CANCEL_SEARCH_FAVS
})

export const NO_FAVS = 'NO_FAVS'
export const noFavsError = (noFavs) => ({
    type: NO_FAVS,
    noFavs
})
//sends required fields to api to update selected fav
export const updateFavCall = (newFavName, favId, userToken, authToken) => dispatch => {

    let restaurantName = newFavName;
    let id = favId;

   // dispatch(spinner())

    return fetch(`${REACT_APP_FAVS_URL}${favId}`, {
        method: 'PATCH',
        body: JSON.stringify({ id, restaurantName }),
        headers:
        {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => {
            let resObj = res.json()
            return resObj;

        })

        .then(resObj => {

            let checkObj = {
                code: resObj.code, reason: resObj.reason, location: resObj.location,
                message: resObj.message
            }

            if (checkObj.reason === 'SUCCESS') {
                dispatch(callViewFavs(userToken, authToken))
            }
            else {
                dispatch(cancelEditFavs())
            }
        })

}
//gets user fav and dispatch fav data to state
export const getFavsSetState = (findFav, authToken) => dispatch => {

   // dispatch(spinner())

    return fetch(`${REACT_APP_FAVS_URL}${findFav}`, {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => {
            let resObj = res.json();

            return resObj;
        })
        .then(resObj => setFavObject(resObj, dispatch))

}

const setFavObject = (resObj, dispatch) => {

    let favOjb = {
        id: resObj.id, restaurantYelpId: resObj.restaurantYelpId, restaurantName: resObj.restaurantName,
        restaurantAlias: resObj.alias
    }

    dispatch(editFavsState(favOjb))

}
//calls API with required data which calls Yelp
export const performYelpCall = (restaurantName, restaurantZip, publicSort) => dispatch => {
    if (restaurantName === undefined || restaurantName === null || restaurantName === '') {

        dispatch(setErrorState('Please enter the restaurant name.'))
    }

    else if (restaurantZip === undefined || restaurantZip === null || restaurantZip === '') {

        dispatch(setErrorState('Please enter your zip code.'))
    }

    else {
        publicSort = publicSort[0]

      //  dispatch(spinner())

        return fetch(`${REACT_APP_FAV_SEARCH_DETAIL_URL}`, {
            method: 'POST',
            body: JSON.stringify({ restaurantName, restaurantZip, publicSort }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(({ businesses }) => mapResultsHandler(businesses, dispatch))

    }
}//END persormYelpCall

//maps result object returned by Yelp and dispatch call to display the list of results
const mapResultsHandler = (businesses, dispatch) => {

    let results = businesses.map(business => ({
        restaurantYelpId: business.id, url: business.url, restaurantName: business.name,
        address: business.location.address1, city: business.location.city, cost: business.price, restaurantAlias: business.alias
    }))

    let displayResults = [];

    let loopLength;

    let userMessage;

    if (businesses.length < 1) {
        userMessage = '0 Results - Please refine your search'
    }

    else if (businesses.length > 6) {
        loopLength = 6;
    }
    else {
        loopLength = businesses.length;
    };

    for (let i = 0; i < loopLength; i++) {

        displayResults = [...displayResults, results[i]]

    }

    dispatch(displayNewFavs(displayResults, userMessage))
}

//calls API with selected new fav values to save to users fav list
export const callAddNewFav = (restaurant, userToken, authToken) => dispatch => {

    let restaurantYelpId = restaurant[0].restaurantYelpId;
    let restaurantName = restaurant[0].restaurantName;
    let restaurantAlias = restaurant[0].restaurantAlias;

   // dispatch(spinner())

    return fetch(`${REACT_APP_FAVS_URL}`, {
        method: 'POST',
        body: JSON.stringify({
            userRef: userToken, restaurantYelpId: restaurantYelpId, restaurantName: restaurantName,
            restaurantAlias: restaurantAlias
        }),
        headers:
        {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`

        }
    })
        .then(res => dispatch(cancelAddFavs()))

}//END callAddNewFav

//calls api to return users saved favs
export const callViewFavs = (userToken, authToken) => dispatch => {

    //dispatch(spinner())

    return fetch(`${REACT_APP_USERFAVS_URL}${userToken}`, {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`

        }
    })
        .then(res => res.json())
        .then(({ userFavs }) => mapFavResultsHandler(userFavs, dispatch))
}//END callViewFavs
//maps users favs to set to state for display
const mapFavResultsHandler = (userFavs, dispatch) => {

    if (userFavs === undefined || userFavs === null) {

        let noFavs = 'You have no favorites.  Click below to add!'

        dispatch(noFavsError(noFavs))
    }

    else {

        let favResults = userFavs.map(userFav => ({
            id: userFav.id, restaurantYelpId: userFav.restaurantYelpId,
            restaurantName: userFav.restaurantName, restaurantAlias: userFav.restaurantAlias
        }))

        let displayFavs = [];

        for (let i = 0; i < userFavs.length; i++) {

            displayFavs = [...displayFavs, favResults[i]]

        }
        let numJoints = displayFavs.length

        dispatch(viewFavs(displayFavs, numJoints))
    }
}
//calls api to delete fav
export const callDelFavs = (authToken, userToken, favId) => dispatch => {

   // dispatch(spinner())

    return fetch(`${REACT_APP_FAVS_URL}${favId}`, {
        method: 'DELETE',
        headers:
        {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`

        }
    })
        .then(res => {

            dispatch(callViewFavs(userToken, authToken))
        })


}//END callDelFavs

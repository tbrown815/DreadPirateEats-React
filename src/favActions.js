import jwtDecode from 'jwt-decode';

import { REACT_APP_FAVS_URL, REACT_APP_FAV_SEARCH_DETAIL_URL, REACT_APP_USERFAVS_URL } from './config';
import {setErrorState} from './actions'
import {storeAuthToken, clearAuthToken, storeUserToken, clearUserToken} from './localStore';

require ('dotenv').config();

export const VIEW_FAVS = 'VIEW_FAVS'
export const viewFavs = (displayFavs) => ({
    type: VIEW_FAVS,
    displayFavs
})

export const EDIT_FAVS = 'EDIT_FAVS'
export const editFavs = () => ({
    type: EDIT_FAVS
})

export const CANCEL_EDIT_FAVS = 'CANCEL_EDIT_FAVS'
export const cancelEditFavs = () => ({
    type: CANCEL_EDIT_FAVS
})

export const ADD_NEW_FAV = 'ADD_NEW_FAV'
export const addNewFav = (addNewFav) => ({
    type: ADD_NEW_FAV,
    addNewFav
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
export const displayNewFavs = displayResults => ({
    type: DISPLAY_NEW_FAVS,
    displayResults
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

export const performYelpCall = (resturantName, resturantZip) => dispatch => {
    if(resturantName === undefined || resturantName === null || resturantName === '') {
 
        dispatch(setErrorState('Please enter the resturant name.'))
    }

    else if(resturantZip === undefined || resturantZip === null || resturantZip === '') {
       
        dispatch(setErrorState('Please enter your zip code.'))
    }

    else {
        let searchName = resturantName;

        return fetch(`${REACT_APP_FAV_SEARCH_DETAIL_URL}`, {
            method: 'POST',
            body: JSON.stringify({resturantName, resturantZip}),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(({businesses}) => mapResultsHandler(businesses, dispatch))
        
    }
}//END persormYelpCall

const mapResultsHandler = (businesses, dispatch) => {
    
    console.log('businesses: ', businesses)

    let results = businesses.map(business => ({resturantYelpId: business.id, url: business.url, resturantName: business.name,
            address: business.location.address1, city: business.location.city, cost: business.price}))

    let displayResults = [];
    
    let loopLength;

    if (businesses.length > 6) {
             loopLength = 6;
        }
        else {
            loopLength = businesses.length;
        };

      for (let i=0; i < loopLength; i++) {

        displayResults = [...displayResults, results[i]]

        }
      
        console.log('displayResults: ', displayResults)

        dispatch(displayNewFavs(displayResults))
    }
            
            
export const callAddNewFav = (resturant, userToken, authToken) => dispatch => {
    let resturantYelpId = resturant[0].resturantYelpId;
    let resturantName = resturant[0].resturantName;

    console.log('actionuserToken: ', userToken)
    console.log('actionauthToken: ', authToken)

        return fetch(`${REACT_APP_FAVS_URL}`, {
            method: 'POST',
            body: JSON.stringify({userRef: userToken, resturantYelpId: resturantYelpId, 
                resturantName: resturantName}),
            headers: 
                {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`
            
                }
        })
        .then(res => dispatch(cancelAddFavs()))
        
}//END callAddNewFav

export const callViewFavs = (userToken, authToken) => dispatch => {
    console.log('callViewFavs')
    return fetch(`${REACT_APP_USERFAVS_URL}${userToken}`, {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
    
        }
    })
    .then(res => res.json())
    .then(({userFavs}) => mapFavResultsHandler(userFavs, dispatch))
}//END callViewFavs

const mapFavResultsHandler = (userFavs, dispatch) => {
    
    console.log('userFavs: ', userFavs)

    if (userFavs === undefined || userFavs === null) {

        let noFavs = 'You have no favorites.  Click below to add!'
        
        dispatch(noFavsError(noFavs))
    }

    else {

    let favResults = userFavs.map(userFav => ({id: userFav.id, resturantYelpId: userFav.resturantYelpId, resturantName: userFav.resturantName}))

    let displayFavs = [];
      
      for (let i=0; i < userFavs.length; i++) {

        displayFavs = [...displayFavs, favResults[i]]

        }
      
        console.log('displayFavs: ', displayFavs)

        dispatch(viewFavs(displayFavs))
    }   
    }

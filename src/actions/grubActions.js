import jwtDecode from 'jwt-decode';
import store from '../store'

import { REACT_APP_FAVS_URL, REACT_APP_FAV_SEARCH_DETAIL_URL, REACT_APP_USERFAVS_URL } from '../config';
import {setErrorState} from './actions'
import {callViewFavs} from './favActions'
import {storeAuthToken, clearAuthToken, storeUserToken, clearUserToken} from '../localStore';

require ('dotenv').config();

export const FIND_GRUB = 'FIND_GRUB'
export const findGrub = (hangryTaunt, madeOffers, restart, theOffer) => ({
    type: FIND_GRUB,
    hangryTaunt: hangryTaunt,
    madeOffers: madeOffers,
    restart: restart, 
    theOffer: theOffer
})

//NOT USED COULD DELETE
export const RESTART_APP = 'RESTART_APP'
export const restartApp = () => ({
    type: RESTART_APP
})


export const grubSearch = (hangryTaunt, madeOffers, restart, theOffer, userToken, authToken) => dispatch => {
    console.log('grubSearch CALLED')

        dispatch(findGrub(hangryTaunt, madeOffers, restart, theOffer))
}

export const callRestart = (userToken, authToken) => dispatch => {
        console.log('RESTART CALLED')

        dispatch(callViewFavs(userToken, authToken))

    }

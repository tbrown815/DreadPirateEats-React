
import { callViewFavs } from './favActions'

require('dotenv').config();

export const FIND_GRUB = 'FIND_GRUB'
export const findGrub = (hangryTaunt, madeOffers, restart, theOffer) => ({
    type: FIND_GRUB,
    hangryTaunt: hangryTaunt,
    madeOffers: madeOffers,
    restart: restart,
    theOffer: theOffer
})

export const grubSearch = (hangryTaunt, madeOffers, restart, theOffer, userToken, authToken) => dispatch => {

    dispatch(findGrub(hangryTaunt, madeOffers, restart, theOffer))
}

export const callRestart = (userToken, authToken) => dispatch => {

    dispatch(callViewFavs(userToken, authToken))

}

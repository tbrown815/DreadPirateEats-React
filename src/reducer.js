import { FIND_GRUB, RESTART_APP, LOGIN_USER, LOGOUT_USER, SIGNUP_USER, LOGIN_SUCCESS } from './actions'


const initialState = {
    grubJoints: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
    madeOffers: [],
    theOffer: '',
    hangryTaunt: 'Click ta draw ya scally wag!',
    loggedIn: 0,
    numDraws: 1,
    gameOn: true,
    restart: false
  }

  export default (state = initialState, action) => {

    if (action.type === RESTART_APP) {
        return Object.assign({}, state, {
            grubJoints: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
            madeOffers: [],
            theOffer: '',
            hangryTaunt: 'Click ta draw ya scally wag!',
            numDraws: 1,
            gameOn: true,
            restart: false  
        })
    }

    if (action.type === LOGOUT_USER) {
        return Object.assign({}, state, {
            loggedIn: 0
        })
    }

    if (action.type === LOGIN_USER) {
        return Object.assign({}, state, {
            loggedIn: 1
        })
    }
    
    if (action.type === SIGNUP_USER) {
        return Object.assign({}, state, {
            loggedIn: 2
        })
    }

    if (action.type === LOGIN_SUCCESS) {
        return Object.assign({}, state, {
            loggedIn: 3
        })
    }

    if (action.type === FIND_GRUB) {
        
        let numOffers = state.madeOffers.length;
        
        if(numoffers > 2) {
            
        }

        return Object.assign({}, state, {

        })
    }



  } //end of export
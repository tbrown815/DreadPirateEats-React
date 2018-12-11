import { FIND_GRUB, RESTART_APP, LOGIN_USER, LOGOUT_SUCCESS, SIGNUP_USER, EDIT_FAVS, RETURN_TO_GAME,
        CREATE_NEW_USER, LOGIN_SUCCESS, SET_AUTH_TOKEN, ERROR_STATE, CANCEL_STATE } from './actions'

const initialState = {
    grubJoints: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
    madeOffers: [],
    theOffer: '',
    hangryTaunt: 'Click ta draw ya scally wag!',
    gameOn: true,
    restart: false,
    loggedIn: 4,
    authToken: null,
    userToken: null,
    currentUser: null,
    errorMessage: null
  }

  export default (state = initialState, action) => {

    if (action.type === RESTART_APP) {
        return Object.assign({}, state, {
            grubJoints: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
            madeOffers: [],
            theOffer: '',
            hangryTaunt: 'Click ta draw ya scally wag!',
            gameOn: true,
            restart: false  
        })
    }

    if (action.type === LOGOUT_SUCCESS) {
        console.log('LOGOUT_SUCCESS')
        return Object.assign({}, state, {
            loggedIn: 0,
            authToken: null,
            userToken: null,
            currentUser: null,
            errorMessage: null
        })
    }

    if (action.type === LOGIN_USER) {
        console.log('LOGIN_USER')

        return Object.assign({}, state, {
            loggedIn: 1
        })
    }
    
    if (action.type === SIGNUP_USER) {
        console.log('SIGNUP_USER')

        return Object.assign({}, state, {
            loggedIn: 2
        })
    }

    if (action.type === CREATE_NEW_USER) {
        console.log('CREATE_NEW_USER')
        console.log('userOBJ CU: ', action.userObj)

        return Object.assign({}, state, {
            currentUser: action.currentUser,
            userToken: action.currentUser.id,
            loggedIn: 3
        })
    }

    if (action.type === LOGIN_SUCCESS) {
        console.log('LOGIN_SUCCESS')
        console.log('currentUser LS: ', action.currentUser)
        
        return Object.assign({}, state, {
            currentUser: action.currentUser,
            userToken: action.currentUser.id,
            loggedIn: 3
        })
    }

    if (action.type === EDIT_FAVS) {
        console.log('EDIT_FAVS')
        
        return Object.assign({}, state, {
            loggedIn: 4
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

    if (action.type === FIND_GRUB) {

        let random = Math.floor(Math.random() * parseInt(state.grubJoints.length)) + 0;

        let theOffer = state.grubJoints[random]

        let madeOffers = [...state.madeOffers, `${theOffer} `]

        let numOffers = state.madeOffers.length +1;

        let hangryTaunt;

        console.log('numOffers: ', numOffers)

        if(numOffers < 3) {
            hangryTaunt =  `Draw again ya scally wag!`
    
            console.log('FIND_GRUB < 3')
            return Object.assign({}, state, {
                hangryTaunt,
                madeOffers
            })
        }

        if(numOffers === 3) {
            hangryTaunt =  `It's yer last stand ya scurvy dog!`
    
            console.log('FIND_GRUB = 3')
            return Object.assign({}, state, {
                hangryTaunt,
                madeOffers
            })
        }

        if(numOffers === 4) {
            hangryTaunt =  `Yer time is up, walk thee plank!`    

            console.log('FIND_GRUB = 4')
            return Object.assign({}, state, {
                hangryTaunt,
                madeOffers,
                restart: true
            })
        }


    }

    return state;

  } //end of export

  //function for error message alert display
function errFunc(xhr) {
    return alert(`${xhr.responseJSON.reason}: ${xhr.responseJSON.location} ${xhr.responseJSON.message}`)
}
import { FIND_GRUB, RESTART_APP, LOGIN_USER, LOGOUT_USER, SIGNUP_USER, LOGIN_SUCCESS } from './actions'


const initialState = {
    grubJoints: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
    madeOffers: [],
    theOffer: '',
    hangryTaunt: 'Click ta draw ya scally wag!',
    loggedIn: 0,
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

    if (action.type === LOGIN_SUCCESS) {
        console.log('LOGIN_SUCCESS')

        return Object.assign({}, state, {
            loggedIn: 3
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
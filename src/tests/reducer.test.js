import reducer from '../reducers/reducer'

import {
    logoutSuccess, loginUser, signupUser, returnToGame, displayAbout, cancelAbout, loginSuccess, setAuthToken, setErrorState, cancelState
} from '../actions/actions'

import {
    guestLogin, guestSuccess, resetGuestState, publicFindGrub
} from '../actions/guestActions'

import {
    findGrub
} from '../actions/grubActions'

import {
    viewFavs, editFavs, editFavsState, cancelEditFavs, addNewFav, cancelAddFavs, searchNewFavs, displayNewFavs,
    setSelectedFav, cancelSearchFavs, noFavsError
} from '../actions/favActions'

describe('reducer', () => {

    //TEST DATA
    const test_username = 'ricksanchez';
    const test_password = 'test9033';
    const test_currentUser = { id: "5c298521c24ad70017da3cda", username: "ricksanchez", email: "ricksanchez@test.com" };
    const test_authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMyOTg1MjFjMjRhZDcwMDE3ZGEzY2RhIiwidXNlcm5hbWUiOiJyaWNrc2FuY2hleiIsImVtYWlsIjoicmlja3NhbmNoZXpAdGVzdC5jb20ifSwiaWF0IjoxNTQ2NTY4NzM3LCJleHAiOjE1NDcwMDA3MzcsInN1YiI6InJpY2tzYW5jaGV6In0.8i7zIOY1RTw4m58woD6J_OkC3F1UO57Zp6pMtsHyfW4'
    const test_errorMessage = 'This is a test error!';
    const test_taunt = 'This is a test hangry taunt'
    const test_fav = { id: "5c2985f3c24ad70017da3cdc", restaurantYelpId: "XY2gaLVR4UPHb9n0qP_TqA", restaurantName: "Best Bison", restaurantAlias: "best-bison-omaha-3" }

    const test_grubJoints = [
        { id: "5c2985f3c24ad70017da3cdc", restaurantYelpId: "XY2gaLVR4UPHb9n0qP_TqA", restaurantName: "Best Bison", restaurantAlias: "best-bison-omaha-3" },
        { id: "5c29860bc24ad70017da3cdd", restaurantYelpId: "rg941Qb9wA7_AM_TwO9OAg", restaurantName: "Dinosaur Bar-B-Que", restaurantAlias: "dinosaur-bar-b-que-stamford" },
        { id: "5c2985e5c24ad70017da3cdb", restaurantYelpId: "Xj8ve8_47C_1SDVN1cKIsg", restaurantName: "Sam & Gabe's", restaurantAlias: "sam-and-gabes-urbandale" }
    ];

    const test_madeOffers = [
        { restaurantName: "Sam & Gabe's", restaurantAlias: "https://www.yelp.com/biz/sam-and-gabes-urbandale" },
        { restaurantName: "Best Bison", restaurantAlias: "https://www.yelp.com/biz/best-bison-omaha-3" },
        { restaurantName: "Dinosaur Bar-B-Que", restaurantAlias: "https://www.yelp.com/biz/dinosaur-bar-b-que-stamford" }
    ];

    const test_publicSort = ['rating', 'eview_count', 'distance'];

    const test_guestFavState = [
        { restaurantName: "Tasty Pizza", address: "5423 Leavenworth St", city: "Omaha", url: "https://www.yelp.com/biz/tasty-pizza-omaha?adjust_…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg" },
        { restaurantName: "Block 16", address: "1611 Farnam St", city: "Omaha", url: "https://www.yelp.com/biz/block-16-omaha-2?adjust_c…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg" },
        { restaurantName: "Stella's Hamburgers", address: "106 Galvin Rd S", city: "Bellevue", url: "https://www.yelp.com/biz/stellas-hamburgers-bellev…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg" },
        { restaurantName: "Amateur Coffee", address: "3913 Cuming St", city: "Omaha", url: "https://www.yelp.com/biz/amateur-coffee-omaha?adju…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg" },
        { restaurantName: "Orsi's Italian Bakery & Pizzeria", address: "621 Pacific St", city: "Omaha", url: "https://www.yelp.com/biz/orsis-italian-bakery-and-…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg" }]

    const test_newFavs = [
        { restaurantYelpId: "cgnW8GAYTk3JYixZQAgXPA", url: "https://www.yelp.com/biz/psy-street-kitchen-los-an…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "PSY Street Kitchen", address: "15030 Ventura Blvd", city: "Los Angeles" },
        { restaurantYelpId: "ITNAxP_RUZ_FCPFNt7pjmw", url: "https://www.yelp.com/biz/earles-on-crenshaw-los-an…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Earle's On Crenshaw", address: "3864 Crenshaw Blvd", city: "Los Angeles" },
        { restaurantYelpId: "liZTt96EX_TWUrbVGkfZqA", url: "https://www.yelp.com/biz/stacked-eatery-encino?adj…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Stacked Eatery", address: "15826 Ventura Blvd", city: "Encino" },
        { restaurantYelpId: "zL6oir--z7Tyt2ExT3prQQ", url: "https://www.yelp.com/biz/burgerama-valley-village-…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Burgerama", address: "5424 Laurel Canyon Blvd", city: "Valley Village" },
        { restaurantYelpId: "aN5PkMHYVgbSpyZ9q3pnvg", url: "https://www.yelp.com/biz/vicious-dogs-north-hollyw…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Vicious Dogs", address: "5231 Lankershim Blvd", city: "North Hollywood" },
        { restaurantYelpId: "Kcia8sHINWxqHjThJRAUkw", url: "https://www.yelp.com/biz/anzu-japanese-gourmet-los…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Anzu Japanese Gourmet", address: "11270 La Grange Ave", city: "Los Angeles" }
    ]


    it('LOGIN_USER Should set logged in state to 1', () => {

        let state = {
            loggedIn: 0
        }

        state = reducer(state, loginUser())
        expect(state).toEqual({ loggedIn: 1 })
    })

    it('GUEST_LOGIN Should set logged in state to 5', () => {

        let state = {
            loggedIn: 0
        }

        state = reducer(state, guestLogin())
        expect(state).toEqual({ loggedIn: 5 })
    })

    it('GUEST_SUCCESS Should set logged in state to 6 and set a list of joints to draw from', () => {

        let state = {
            loggedIn: null,
            prevLoggedIn: null,
            publicJoints: null,
            noFavsMessage: null,
            publicNumJoints: null,
            publicMadeOffers: null,
            publicTheOffer: null,
            randomCheck: null,
            publicHangryTaunt: null,
            publicRestart: null,
            publicDrawCount: null
        }

        let guestFavState = test_guestFavState
        let publicNumJoints = guestFavState.length

        state = reducer(state, guestSuccess(guestFavState, publicNumJoints))
        expect(state).toEqual({
            loggedIn: 6,
            prevLoggedIn: 0,
            publicJoints: guestFavState,
            noFavsMessage: null,
            publicNumJoints: publicNumJoints,
            publicMadeOffers: [],
            publicTheOffer: '',
            randomCheck: ['x'],
            publicHangryTaunt: 'Click ta draw ya scallywag!',
            publicRestart: false,
            publicDrawCount: 0
        })
    })

    it('GUEST_RESET Should reset by setting logged in state to 5 and set a list of joints to draw from', () => {

        let state = {
            loggedIn: null,
            prevLoggedIn: null,
            publicJoints: null,
            noFavsMessage: null,
            publicNumJoints: null,
            publicMadeOffers: null,
            publicTheOffer: null,
            randomCheck: null,
            publicHangryTaunt: null,
            publicRestart: null,
            publicDrawCount: null
        }

        let guestFavState = test_guestFavState
        let publicNumJoints = guestFavState.length

        state = reducer(state, resetGuestState(guestFavState, publicNumJoints))
        expect(state).toEqual({
            loggedIn: 5,
            prevLoggedIn: 0,
            publicJoints: undefined,
            noFavsMessage: null,
            publicNumJoints: undefined,
            publicMadeOffers: [],
            publicTheOffer: '',
            randomCheck: ['x'],
            publicHangryTaunt: 'Click ta draw ya scallywag!',
            publicRestart: false,
            publicDrawCount: 0
        })
    })

    it('DISPLAY_ABOUT Should set state to 7 and record previous state', () => {

        let state = {
            loggedIn: 4
        }

        let oldLoginState = state.loggedIn


        state = reducer(state, displayAbout(oldLoginState))
        expect(state).toEqual({
            loggedIn: 7,
            prevLoggedIn: oldLoginState

        })
    })

    it('CANCEL_ABOUT Should set state to recorded previous state', () => {

        let state = {
            loggedIn: 4
        }

        let oldLoginState = state.loggedIn


        state = reducer(state, cancelAbout(oldLoginState))
        expect(state).toEqual({
            loggedIn: oldLoginState

        })
    })

    it('SIGNUP_USER Should set logged in state to 2', () => {

        let state = {
            loggedIn: 0
        }

        state = reducer(state, signupUser())
        expect(state).toEqual({ loggedIn: 2 })
    })

    it('LOGIN_SUCCESS Should set logged in state to 3 and set current user info', () => {

        let state = {
            currentUser: null,
            userToken: null,
            publicSort: null,
            loggedIn: null,
            errorMessage: 'This is a test error!'
        }

        let currentUser = test_currentUser
        let currentUserId = test_currentUser.id

        state = reducer(state, loginSuccess(currentUser, currentUserId))
        expect(state).toEqual({
            currentUser: currentUser,
            userToken: currentUserId,
            publicSort: ['rating'],
            loggedIn: 3,
            errorMessage: null
        })
    })

    it('SEARCH_NEW_FAVS Should set favstate to 1', () => {

        let state = {
            favState: 0
        }

        state = reducer(state, searchNewFavs())
        expect(state).toEqual({
            favState: 1

        })
    })

    it('DISPLAY_NEW_FAVS add list of new favs to state', () => {

        let state = {
            newFavorites: null,
            userMessage: 'This is a test user message!'
        }

        let displayResults = test_newFavs
        let userMessage = state.userMessage

        state = reducer(state, displayNewFavs(displayResults, userMessage))
        expect(state).toEqual({
            newFavorites: displayResults,
            userMessage: userMessage
        })
    })

    it('VIEW_FAVS add favs to state to display', () => {

        let state = {
            grubJoints: null,
            noFavsMessage: null,
            editFavState: null,
            selectedFavorite: null,
            numJoints: null,
            madeOffers: null,
            theOffer: null,
            randomCheck: null,
            hangryTaunt: null,
            restart: false,
            newFavorites: null
        }

        let displayFavs = test_newFavs
        let numJoints = test_newFavs.length

        state = reducer(state, viewFavs(displayFavs, numJoints))
        expect(state).toEqual({
            grubJoints: displayFavs,
            noFavsMessage: null,
            editFavState: 0,
            selectedFavorite: null,
            numJoints: numJoints,
            madeOffers: [],
            theOffer: '',
            randomCheck: ['x'],
            hangryTaunt: 'Click ta draw ya scallywag!',
            restart: false,
            newFavorites: []
        })
    })

    it('SET_SELECTED_FAV set fav for selection', () => {

        let state = {
            selectedFavorite: null
        }

        let selectedFavorite = test_fav

        state = reducer(state, setSelectedFav(selectedFavorite))
        expect(state).toEqual({
            selectedFavorite: selectedFavorite
        })
    })

    it('CANCEL_ADD_FAVS set favState = 0', () => {

        let state = {
            favState: null
        }

        let favState = 0

        state = reducer(state, cancelAddFavs())
        expect(state).toEqual({
            favState: favState
        })
    })

    it('EDIT_FAVS set loggedIn = 4', () => {

        let state = {
            loggedIn: null
        }

        let loggedIn = 4

        state = reducer(state, editFavs())
        expect(state).toEqual({
            loggedIn: loggedIn
        })
    })

    it('EDIT_FAVS_STATE set editFavState = 1', () => {

        let state = {
            editFavState: null,
            editFavOjb: null
        }

        let editFavState = 1;
        let favOjb = test_fav

        state = reducer(state, editFavsState(favOjb))
        expect(state).toEqual({
            editFavState: editFavState,
            editFavOjb: favOjb
        })
    })

    it('CANCEL_EDIT_FAVS set editFavState = 0 and selected fav = null', () => {

        let favOjb = test_fav;

        let state = {
            editFavState: null,
            selectedFavorite: favOjb
        }

        let editFavState = 0;

        state = reducer(state, cancelEditFavs())
        expect(state).toEqual({
            editFavState: editFavState,
            selectedFavorite: null
        })
    })

    it('CANCEL_SEARCH_FAVS set favState = 0 ', () => {

        let state = {
            favState: null
        }

        let favState = 0

        state = reducer(state, cancelSearchFavs())
        expect(state).toEqual({
            favState: favState
        })
    })

    it('RETURN_TO_GAME set loggedIn = 3 ', () => {

        let state = {
            loggedIn: null
        }

        let loggedIn = 3

        state = reducer(state, returnToGame())
        expect(state).toEqual({
            loggedIn: loggedIn
        })
    })

    it('SET_AUTH_TOKEN set authToken ', () => {

        let state = {
            authToken: null
        }

        let authToken = test_authToken

        state = reducer(state, setAuthToken(authToken))
        expect(state).toEqual({
            authToken: authToken
        })
    })

    it('ERROR_STATE set errorMessage ', () => {

        let state = {
            errorMessage: null
        }

        let errorMessage = test_errorMessage

        state = reducer(state, setErrorState(errorMessage))
        expect(state).toEqual({
            errorMessage: errorMessage
        })
    })

    it('CANCEL_STATE cancel login loggedin = 0 ', () => {

        let state = {
            loggedIn: null
        }

        let loggedIn = 0

        state = reducer(state, cancelState())
        expect(state).toEqual({
            loggedIn: loggedIn
        })
    })

    it('NO_FAVS set noFavs message ', () => {

        let state = {
            noFavsMessage: null
        }

        let noFavs = test_errorMessage

        state = reducer(state, noFavsError(noFavs))
        expect(state).toEqual({
            noFavsMessage: noFavs
        })
    })

    it('FIND_GRUB find grub restart false ', () => {

        let state = {
            hangryTaunt: null,
            madeOffers: null,
            restart: null,
            randomCheck: null
        }

        let hangryTaunt = test_taunt
        let madeOffers = test_madeOffers
        let restart = false
        let randomCheck = null

        state = reducer(state, findGrub(hangryTaunt, madeOffers, restart, randomCheck))
        expect(state).toEqual({
            hangryTaunt: hangryTaunt,
            madeOffers: madeOffers,
            restart: restart,
            randomCheck: undefined
        })
    })

    it('FIND_GRUB find grub restart true ', () => {

        let state = {
            hangryTaunt: null,
            madeOffers: null,
            restart: null,
            randomCheck: null
        }

        let hangryTaunt = test_taunt
        let madeOffers = test_madeOffers
        let restart = true
        let randomCheck = null

        state = reducer(state, findGrub(hangryTaunt, madeOffers, restart, randomCheck))
        expect(state).toEqual({
            hangryTaunt: hangryTaunt,
            madeOffers: madeOffers,
            restart: restart,
            randomCheck: undefined
        })
    })

    it('GUEST_FIND_GRUB find grub restart false ', () => {

        let state = {
            publicHangryTaunt: null,
            publicMadeOffers: null,
            publicRestart: null,
            publicTheOffer: null
        }

        let publicHangryTaunt = test_taunt
        let publicMadeOffers = test_madeOffers
        let publicRestart = false
        let publicTheOffer = null

        state = reducer(state, publicFindGrub(publicHangryTaunt, publicMadeOffers, publicRestart, publicTheOffer))
        expect(state).toEqual({
            publicHangryTaunt: publicHangryTaunt,
            publicMadeOffers: publicMadeOffers,
            publicRestart: publicRestart,
            publicTheOffer: publicTheOffer
        })
    })

    it('GUEST_FIND_GRUB find grub restart true ', () => {

        let state = {
            publicHangryTaunt: null,
            publicMadeOffers: null,
            publicRestart: null,
            publicTheOffer: null
        }

        let publicHangryTaunt = test_taunt
        let publicMadeOffers = test_madeOffers
        let publicRestart = true
        let publicTheOffer = test_fav

        state = reducer(state, publicFindGrub(publicHangryTaunt, publicMadeOffers, publicRestart, publicTheOffer))
        expect(state).toEqual({
            publicHangryTaunt: publicHangryTaunt,
            publicMadeOffers: publicMadeOffers,
            publicRestart: publicRestart,
            publicTheOffer: publicTheOffer
        })
    })


})
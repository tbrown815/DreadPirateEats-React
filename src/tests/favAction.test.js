import {
    VIEW_FAVS, viewFavs, EDIT_FAVS, editFavs, EDIT_FAVS_STATE, editFavsState, CANCEL_EDIT_FAVS, cancelEditFavs, ADD_NEW_FAV, 
    addNewFav, CANCEL_ADD_FAVS, cancelAddFavs, SEARCH_NEW_FAVS, searchNewFavs, DISPLAY_NEW_FAVS, displayNewFavs, 
    SET_SELECTED_FAV, setSelectedFav, CANCEL_SEARCH_FAVS, cancelSearchFavs, NO_FAVS, noFavsError
} from '../actions/favActions'

const TEST_GRUBJOINTS = [
    { id: "5c2985f3c24ad70017da3cdc", restaurantYelpId: "XY2gaLVR4UPHb9n0qP_TqA", restaurantName: "Best Bison", restaurantAlias: "best-bison-omaha-3" },
    { id: "5c29860bc24ad70017da3cdd", restaurantYelpId: "rg941Qb9wA7_AM_TwO9OAg", restaurantName: "Dinosaur Bar-B-Que", restaurantAlias: "dinosaur-bar-b-que-stamford" },
    { id: "5c2985e5c24ad70017da3cdb", restaurantYelpId: "Xj8ve8_47C_1SDVN1cKIsg", restaurantName: "Sam & Gabe's", restaurantAlias: "sam-and-gabes-urbandale" }
]

const TEST_OBJ ={
    id: "5c2985f3c24ad70017da3cdc", 
    restaurantYelpId: "XY2gaLVR4UPHb9n0qP_TqA", 
    restaurantName: "Best Bison", 
    restaurantAlias: "best-bison-omaha-3" 
    }

const TEST_MESSAGE = 'This is a test message'


describe('favActions test', () => {

    it('Return VIEW_FAVS displayFavs, numJoints', () => {
      
        let displayFavs = TEST_GRUBJOINTS
        let numJoints = displayFavs.length

        const action = viewFavs(displayFavs, numJoints)

        expect(action.type).toEqual(VIEW_FAVS)
        expect(action.displayFavs).toEqual(displayFavs)
        expect(action.numJoints).toEqual(displayFavs.length)

    })

    it('Return EDIT_FAVS', () => {

        const action = editFavs()

        expect(action.type).toEqual(EDIT_FAVS)
    })

    it('Return EDIT_FAVS_STATE favOjb', () => {
      
        let favOjb = TEST_OBJ

        const action = editFavsState(favOjb)

        expect(action.type).toEqual(EDIT_FAVS_STATE)
        expect(action.favOjb).toEqual(favOjb)

    })

    it('Return CANCEL_EDIT_FAVS', () => {

        const action = cancelEditFavs()

        expect(action.type).toEqual(CANCEL_EDIT_FAVS)
    })

    it('Return CANCEL_ADD_FAVS', () => {

        const action = cancelAddFavs()

        expect(action.type).toEqual(CANCEL_ADD_FAVS)
    })

    it('Return SEARCH_NEW_FAVS', () => {

        const action = searchNewFavs()

        expect(action.type).toEqual(SEARCH_NEW_FAVS)
    })

    it('Return DISPLAY_NEW_FAVS displayResults, userMessage', () => {
      
        let displayResults = TEST_GRUBJOINTS
        let userMessage = TEST_MESSAGE

        const action = displayNewFavs(displayResults, userMessage)

        expect(action.type).toEqual(DISPLAY_NEW_FAVS)
        expect(action.displayResults).toEqual(displayResults)
        expect(action.userMessage).toEqual(userMessage)
    })

    it('Return SET_SELECTED_FAV selectedFav', () => {
      
        let selectedFav = TEST_OBJ

        const action = setSelectedFav(selectedFav)

        expect(action.type).toEqual(SET_SELECTED_FAV)
        expect(action.selectedFav).toEqual(selectedFav)
    })

    it('Return CANCEL_SEARCH_FAVS', () => {

        const action = cancelSearchFavs()

        expect(action.type).toEqual(CANCEL_SEARCH_FAVS)
    })

    it('Return NO_FAVS noFavs', () => {
      
        let noFavs = TEST_MESSAGE

        const action = noFavsError(noFavs)

        expect(action.type).toEqual(NO_FAVS)
        expect(action.noFavs).toEqual(noFavs)
    })

})
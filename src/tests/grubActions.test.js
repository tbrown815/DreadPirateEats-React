import {
    FIND_GRUB, findGrub
    } from '../actions/grubActions'

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

describe('grubActions test', () => {

    it('Return FIND_GRUB, hangryTaunt, madeOffers, restart, theOffer', () => {

        let hangryTaunt = TEST_MESSAGE;
        let madeOffers = TEST_GRUBJOINTS;
        let restart = false;
        let theOffer = TEST_OBJ;

        const action = findGrub(hangryTaunt, madeOffers, restart, theOffer)

        expect(action.type).toEqual(FIND_GRUB)
        expect(action.hangryTaunt).toEqual(hangryTaunt)
        expect(action.madeOffers).toEqual(madeOffers)
        expect(action.restart).toEqual(false)
        expect(action.theOffer).toEqual(theOffer)
    })




})
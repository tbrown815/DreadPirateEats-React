import {
    GUEST_LOGIN, guestLogin, GUEST_SUCCESS, guestSuccess, GUEST_RESET, resetGuestState, ERROR_STATE, setErrorState, SET_AUTH_TOKEN, setAuthToken,
    GUEST_FIND_GRUB, publicFindGrub
} from '../actions/guestActions'


const TEST_GRUBJOINTS = [
    { id: "5c2985f3c24ad70017da3cdc", restaurantYelpId: "XY2gaLVR4UPHb9n0qP_TqA", restaurantName: "Best Bison", restaurantAlias: "best-bison-omaha-3" },
    { id: "5c29860bc24ad70017da3cdd", restaurantYelpId: "rg941Qb9wA7_AM_TwO9OAg", restaurantName: "Dinosaur Bar-B-Que", restaurantAlias: "dinosaur-bar-b-que-stamford" },
    { id: "5c2985e5c24ad70017da3cdb", restaurantYelpId: "Xj8ve8_47C_1SDVN1cKIsg", restaurantName: "Sam & Gabe's", restaurantAlias: "sam-and-gabes-urbandale" }
]

const TEST_OBJ = {
    id: "5c2985f3c24ad70017da3cdc",
    restaurantYelpId: "XY2gaLVR4UPHb9n0qP_TqA",
    restaurantName: "Best Bison",
    restaurantAlias: "best-bison-omaha-3"
}

const TEST_MESSAGE = 'This is a test message'

const TEST_AUTHTOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMwZGI2MjE1ZTJkN2IyNmZjNmM2MmI3IiwidXNlcm5hbWUiOiJyaWNrc2FuY2hleiIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSJ9LCJpYXQiOjE1NDY4MDYwNjIsImV4cCI6MTU0NzIzODA2Miwic3ViIjoicmlja3NhbmNoZXoifQ.YxB_CANh4f-GZu_2CdN8tYHMh01Z8VIs4wrXFbRNuOk"


describe('grubActions test', () => {

    it('Return GUEST_LOGIN', () => {
        const action = guestLogin()

        expect(action.type).toEqual(GUEST_LOGIN)
    })

    it('Return GUEST_SUCCESS guestFavState, publicNumJoints', () => {

        let guestFavState = 0
        let publicNumJoints = TEST_GRUBJOINTS.length

        const action = guestSuccess(guestFavState, publicNumJoints)

        expect(action.type).toEqual(GUEST_SUCCESS)
        expect(action.guestFavState).toEqual(0)
        expect(action.publicNumJoints).toEqual(TEST_GRUBJOINTS.length)

    })

    it('Return GUEST_RESET', () => {
        const action = resetGuestState()

        expect(action.type).toEqual(GUEST_RESET)
    })

    it('Return ERROR_STATE errorMessage', () => {

        let errorMessage = TEST_MESSAGE

        const action = setErrorState(errorMessage)

        expect(action.type).toEqual(ERROR_STATE)
        expect(action.errorMessage).toEqual(TEST_MESSAGE)
        expect(action.errorMessage.length).toEqual(TEST_MESSAGE.length)
    })

    it('Return SET_AUTH_TOKEN authToken', () => {

        let authToken = TEST_AUTHTOKEN

        const action = setAuthToken(authToken)

        expect(action.type).toEqual(SET_AUTH_TOKEN)
        expect(action.authToken).toEqual(TEST_AUTHTOKEN)
        expect(action.authToken.length).toEqual(TEST_AUTHTOKEN.length)
    })

    it('Return GUEST_FIND_GRUB publicHangryTaunt, publicMadeOffers, publicRestart, publicTheOffer', () => {

        let publicHangryTaunt = TEST_MESSAGE;
        let publicMadeOffers = TEST_GRUBJOINTS;
        let publicRestart = false;
        let publicTheOffer = TEST_OBJ;

        const action = publicFindGrub(publicHangryTaunt, publicMadeOffers, publicRestart, publicTheOffer)

        expect(action.type).toEqual(GUEST_FIND_GRUB)
        expect(action.publicHangryTaunt).toEqual(publicHangryTaunt)
        expect(action.publicMadeOffers).toEqual(publicMadeOffers)
        expect(action.publicRestart).toEqual(false)
        expect(action.publicTheOffer).toEqual(publicTheOffer)
    })



})
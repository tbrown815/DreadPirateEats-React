import React from 'react';

import { shallow, mount } from 'enzyme';
import store from '../store';

import { GuestUser } from '../guestUser/guestUser';


describe('<GuestUser />', () => {


    const TEST_NEWFAVS = [
        { restaurantYelpId: "6XTCsnjpa_fC_yjvvGbXQQ", url: "https://www.yelp.com/biz/lstc-refectory-chicago-2?…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "LSTC Refectory", address: "1100 E 55th St", city: "Chicago" },
        { restaurantYelpId: "IX34m-olKrlEeeEIXEPh9g", url: "https://www.yelp.com/biz/francos-ristorante-chicag…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Franco's Ristorante", address: "300 W 31st St", city: "Chicago" },
        { restaurantYelpId: "BwkeC6JB_4fIVpth2VUyQA", url: "https://www.yelp.com/biz/valois-chicago?adjust_cre…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Valois", address: "1518 E 53rd St", city: "Chicago" },
        { restaurantYelpId: "t5g_E_xDCDO5YXFFGSNLQA", url: "https://www.yelp.com/biz/virtue-restaurant-chicago…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Virtue Restaurant", address: "1462 E 53rd St", city: "Chicago" },
        { restaurantYelpId: "-56w9imfIDro7JxTZ9W1lg", url: "https://www.yelp.com/biz/taqueria-varitas-chicago?…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Taqueria Varitas", address: "700 E 47th St", city: "Chicago" },
        { restaurantYelpId: "3xvQksDVZQy_nCFwweyoZw", url: "https://www.yelp.com/biz/the-sit-down-cafe-and-sus…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "The Sit Down Cafe & Sushi Bar", address: "1312 E 53rd St", city: "Chicago" }
    ]

    const TEST_GRUBJOINTS = [
        { id: "5c2985f3c24ad70017da3cdc", restaurantYelpId: "XY2gaLVR4UPHb9n0qP_TqA", restaurantName: "Best Bison", restaurantAlias: "best-bison-omaha-3" },
        { id: "5c29860bc24ad70017da3cdd", restaurantYelpId: "rg941Qb9wA7_AM_TwO9OAg", restaurantName: "Dinosaur Bar-B-Que", restaurantAlias: "dinosaur-bar-b-que-stamford" },
        { id: "5c2985e5c24ad70017da3cdb", restaurantYelpId: "Xj8ve8_47C_1SDVN1cKIsg", restaurantName: "Sam & Gabe's", restaurantAlias: "sam-and-gabes-urbandale" }
    ]

    const TEST_MADEOFFERS = [
        { restaurantName: "Sam & Gabe's", restaurantAlias: "https://www.yelp.com/biz/sam-and-gabes-urbandale" },
        { restaurantName: "Best Bison", restaurantAlias: "https://www.yelp.com/biz/best-bison-omaha-3" },
        { restaurantName: "Dinosaur Bar-B-Que", restaurantAlias: "https://www.yelp.com/biz/dinosaur-bar-b-que-stamford" }
    ]

    const TEST_PUBLICSORT = ['rating', 'eview_count', 'distance']

    const TEST_HANGRYTAUNT = 'This is a hangry taunt!';

    const TEST_NAME = 'steak'
    const TEST_ZIP = '60615'
    const TEST_ERRORMSG = 'This is a test error!';

    const TEST_AUTHTOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMwZGI2MjE1ZTJkN2IyNmZjNmM2MmI3IiwidXNlcm5hbWUiOiJyaWNrc2FuY2hleiIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSJ9LCJpYXQiOjE1NDY4MDYwNjIsImV4cCI6MTU0NzIzODA2Miwic3ViIjoicmlja3NhbmNoZXoifQ.YxB_CANh4f-GZu_2CdN8tYHMh01Z8VIs4wrXFbRNuOk"
    const TEST_USERTOKEN = "5c0db6215e2d7b26fc6c62b7"



    it('render without crashing', () => {

        shallow(<GuestUser store={store} />);
    })

    it('Displays a Hangry Taunt', () => {

        const loggedIn = 5
        let errorMessage = TEST_ERRORMSG;

        let wrapper = shallow(<GuestUser store={store} errorMessage={TEST_ERRORMSG} grubJoints={TEST_GRUBJOINTS}
            madeOffers={TEST_MADEOFFERS} publicSort={TEST_PUBLICSORT} loggedIn={loggedIn} />)

        expect(wrapper.contains(errorMessage)).toEqual(true)
    })

    it('submit searchLocation form check values', () => {

        let userLoc = TEST_ZIP
        let errorMessage = TEST_ERRORMSG
        let loggedIn = 5

        let form = mount(<GuestUser store={store} loggedIn={loggedIn} restaurantZip={TEST_ZIP} errorMessage={TEST_ERRORMSG} />)

        form.instance().guestLogin = jest.fn();

        form.update()

        const restaurantZipInput = form.find('.userLocationField')
        restaurantZipInput.value = userLoc

        form.find('.playAsGuestStart').simulate('submit')

        expect(form.find('.playAsGuestStart').length).toEqual(1)
        expect(form.instance().guestLogin).toHaveBeenCalled()
        expect(restaurantZipInput.value).toBe(TEST_ZIP)
        expect(errorMessage).toBe(TEST_ERRORMSG)


    })

    it('Check grubjoint, publicMadeOffers, publicSort', () => {

        let loggedIn = 6;
        let publicRestart = false;
        let publicMadeOffers = TEST_MADEOFFERS;
        let noFavsMessage = TEST_ERRORMSG
        let grubJoints = TEST_GRUBJOINTS;
        let publicSort = TEST_PUBLICSORT;

        const dispatch = jest.fn();
        const wrapper = mount(<GuestUser grubJoints={TEST_GRUBJOINTS} noFavsMessage={noFavsMessage} publicMadeOffers={TEST_MADEOFFERS}
            publicSort={TEST_PUBLICSORT} loggedIn={loggedIn} publicRestart={publicRestart} />)

        console.log('wrapper: ', wrapper)

        expect(grubJoints.length).toEqual(TEST_GRUBJOINTS.length)
        expect(grubJoints).toEqual(TEST_GRUBJOINTS)
        expect(publicMadeOffers.length).toEqual(TEST_MADEOFFERS.length)
        expect(publicMadeOffers).toEqual(TEST_MADEOFFERS)
        expect(publicSort.length).toEqual(TEST_PUBLICSORT.length)
        expect(publicSort).toEqual(TEST_PUBLICSORT)
    })

    it('guestDraw is called', () => {

        let loggedIn = 6;
        let publicRestart = false;
        let publicMadeOffers = TEST_MADEOFFERS;
        let publicHangryTaunt = TEST_HANGRYTAUNT
        let noFavsMessage = TEST_ERRORMSG


        let form = mount(<GuestUser grubJoints={TEST_GRUBJOINTS} publicHangryTaunt={TEST_HANGRYTAUNT} noFavsMessage={noFavsMessage}
            publicMadeOffers={TEST_MADEOFFERS} publicSort={TEST_PUBLICSORT} loggedIn={loggedIn} publicRestart={publicRestart} />)

        form.instance().guestDraw = jest.fn();

        form.update()

        form.find('.drawbutton').simulate('submit')

        expect(form.find('.drawbutton').length).toEqual(1)
        expect(form.instance().guestDraw).toHaveBeenCalled()
        expect(publicMadeOffers.length).toEqual(TEST_MADEOFFERS.length)
        expect(publicMadeOffers).toEqual(TEST_MADEOFFERS)
        expect(publicHangryTaunt).toEqual('This is a hangry taunt!')
        expect(noFavsMessage).toEqual('This is a test error!')

    })

    it('guestReset is called', () => {

        let loggedIn = 6;
        let publicRestart = true;
        let publicMadeOffers = TEST_MADEOFFERS;

        let form = mount(<GuestUser grubJoints={TEST_GRUBJOINTS} hangryTaunt={TEST_HANGRYTAUNT}
            publicMadeOffers={TEST_MADEOFFERS} publicSort={TEST_PUBLICSORT} loggedIn={loggedIn} publicRestart={publicRestart} />)

        form.instance().guestReset = jest.fn();

        form.update()

        form.find('.restartButton').simulate('submit')

        expect(form.find('.restartButton').length).toEqual(1)
        expect(form.instance().guestReset).toHaveBeenCalled()
        expect(publicMadeOffers.length).toEqual(TEST_MADEOFFERS.length)
        expect(publicMadeOffers).toEqual(TEST_MADEOFFERS)
    })
})
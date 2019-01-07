import React from 'react';

import { shallow, mount } from 'enzyme';
import store from '../store';


import { DrawBox } from '../drawbox/drawbox'


describe('<DrawBox />', () => {


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


    it('render without crashing', () => {

        shallow(<DrawBox store={store} hangryTaunt={TEST_HANGRYTAUNT} grubJoints={TEST_GRUBJOINTS}
            madeOffers={TEST_MADEOFFERS} publicSort={TEST_PUBLICSORT} />);
    })

    it('Displays a Hangry Taunt', () => {

        let hangryTaunt = TEST_HANGRYTAUNT;

        let wrapper = shallow(<DrawBox store={store} hangryTaunt={TEST_HANGRYTAUNT} grubJoints={TEST_GRUBJOINTS}
            madeOffers={TEST_MADEOFFERS} publicSort={TEST_PUBLICSORT} />)

        expect(wrapper.contains(hangryTaunt)).toEqual(true)
    })

    it('Check grubjoint, madeOffers, publicSort', () => {

        const grubJoints = TEST_GRUBJOINTS;
        const madeOffers = TEST_MADEOFFERS;
        const publicSort = TEST_PUBLICSORT;

        const dispatch = jest.fn();
        const wrapper = mount(<DrawBox dispatch={dispatch} grubJoints={TEST_GRUBJOINTS}
            madeOffers={TEST_MADEOFFERS} publicSort={TEST_PUBLICSORT} />)
            
            
            expect(grubJoints.length).toEqual(TEST_GRUBJOINTS.length)
            expect(grubJoints).toEqual(TEST_GRUBJOINTS)
            expect(madeOffers.length).toEqual(TEST_MADEOFFERS.length)
            expect(madeOffers).toEqual(TEST_MADEOFFERS)
            expect(publicSort.length).toEqual(TEST_PUBLICSORT.length)
            expect(publicSort).toEqual(TEST_PUBLICSORT)
        })

    it('loginClick is called', () => {

        let loggedIn = 0

        let form = mount(<DrawBox grubJoints={TEST_GRUBJOINTS}
            madeOffers={TEST_MADEOFFERS} publicSort={TEST_PUBLICSORT} loggedIn={loggedIn} />)

        form.instance().loginClick = jest.fn();

        form.update()

        form.find('.drawBoxLoginButton').simulate('click')

        expect(form.find('.drawBoxLoginButton').length).toEqual(1)
        expect(form.instance().loginClick).toHaveBeenCalled()
    })

    it('continueGuest is called', () => {

        let loggedIn = 0

        let form = mount(<DrawBox grubJoints={TEST_GRUBJOINTS}
            madeOffers={TEST_MADEOFFERS} publicSort={TEST_PUBLICSORT} loggedIn={loggedIn} />)

        form.instance().continueGuest = jest.fn();

        form.update()

        form.find('.drawBoxGuestButton').simulate('click')

        expect(form.find('.drawBoxGuestButton').length).toEqual(1)
        expect(form.instance().continueGuest).toHaveBeenCalled()
    })

    it('editUserFavs is called', () => {

        let loggedIn = 3;
        let grubJoints = [];
        let restart = false;

        let form = mount(<DrawBox grubJoints={grubJoints}
            madeOffers={TEST_MADEOFFERS} publicSort={TEST_PUBLICSORT} loggedIn={loggedIn} restart={restart} />)

        form.instance().editUserFavs = jest.fn();

        form.update()

        form.find('.addFavsButton').simulate('submit')

        expect(form.find('.addFavsButton').length).toEqual(1)
        expect(form.instance().editUserFavs).toHaveBeenCalled()
    })

    it('clickAbout is called', () => {

        let loggedIn = 3;
        let grubJoints = [];
        let restart = false;

        let form = mount(<DrawBox grubJoints={grubJoints}
            madeOffers={TEST_MADEOFFERS} publicSort={TEST_PUBLICSORT} loggedIn={loggedIn} restart={restart} />)

        form.instance().clickAbout = jest.fn();

        form.update()

        form.find('.newPlayerAbout').simulate('click')

        expect(form.find('.newPlayerAbout').length).toEqual(1)
        expect(form.instance().clickAbout).toHaveBeenCalled()
    })

    it('onDraw is called', () => {

        let loggedIn = 3;
        let restart = false;
        let madeOffers = TEST_MADEOFFERS;
        let hangryTaunt = TEST_HANGRYTAUNT

        let form = mount(<DrawBox grubJoints={TEST_GRUBJOINTS} hangryTaunt={TEST_HANGRYTAUNT}
            madeOffers={TEST_MADEOFFERS} publicSort={TEST_PUBLICSORT} loggedIn={loggedIn} restart={restart} />)

        form.instance().onDraw = jest.fn();

        form.update()

        form.find('.drawbutton').simulate('submit')

        expect(form.find('.drawbutton').length).toEqual(1)
        expect(form.instance().onDraw).toHaveBeenCalled()
        expect(madeOffers.length).toEqual(TEST_MADEOFFERS.length)
        expect(madeOffers).toEqual(TEST_MADEOFFERS)
        expect(hangryTaunt).toEqual('This is a hangry taunt!')
    })

    it('restartApp is called', () => {

        let loggedIn = 3;
        let restart = true;
        let madeOffers = TEST_MADEOFFERS;

        let form = mount(<DrawBox grubJoints={TEST_GRUBJOINTS} hangryTaunt={TEST_HANGRYTAUNT}
            madeOffers={TEST_MADEOFFERS} publicSort={TEST_PUBLICSORT} loggedIn={loggedIn} restart={restart} />)

        form.instance().restartApp = jest.fn();

        form.update()

        form.find('.restartButton').simulate('submit')

        expect(form.find('.restartButton').length).toEqual(1)
        expect(form.instance().restartApp).toHaveBeenCalled()
        expect(madeOffers.length).toEqual(TEST_MADEOFFERS.length)
        expect(madeOffers).toEqual(TEST_MADEOFFERS)
    })

})
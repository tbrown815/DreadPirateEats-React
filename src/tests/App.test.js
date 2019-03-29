import React from 'react';

import { shallow } from 'enzyme';
import store from '../store';

import DreadPirate from '../App';

import Nav from '../nav/nav'
import DrawBox from '../drawbox/drawbox';
import UserLogin from '../login_signup/userLogin';
import UserSignUp from '../login_signup/userSignUp';
import Favorites from '../favorites/favorites';
import GuestUser from '../guestUser/guestUser';
import About from '../nav/about'



describe('<DreadPirate />', () => {

    it('render without crashing', () => {
        shallow(<DreadPirate store={store} />).dive();
    })

    it('UserFavorites and DrawBox load when loggedIn = 0', () => {

        let loggedIn = 0


        let wrapper = shallow(<DreadPirate store={store} loggedIn={loggedIn} />);

        wrapper.find(Nav).length === 1
        wrapper.find(DrawBox).length === 1
    })

    it('UserFavorites and UserLogin load when loggedIn = 1', () => {

        let loggedIn = 1


        let wrapper = shallow(<DreadPirate store={store} loggedIn={loggedIn} />);

        wrapper.find(Nav).length === 1
        wrapper.find(UserLogin).length === 1
    })

    it('UserFavorites and UserSignUp load when loggedIn = 2', () => {

        let loggedIn = 2


        let wrapper = shallow(<DreadPirate store={store} loggedIn={loggedIn} />);

        wrapper.find(Nav).length === 1
        wrapper.find(UserSignUp).length === 1
    })

    it('UserFavorites and DrawBox load when loggedIn = 3', () => {

        let loggedIn = 3


        let wrapper = shallow(<DreadPirate store={store} loggedIn={loggedIn} />);

        wrapper.find(Nav).length === 1
        wrapper.find(DrawBox).length === 1
    })

    it('UserFavorites and Favorites load when loggedIn = 4', () => {

        let loggedIn = 4


        let wrapper = shallow(<DreadPirate store={store} loggedIn={loggedIn} />);

        wrapper.find(Nav).length === 1
        wrapper.find(Favorites).length === 1
    })

    it('UserFavorites and GuestUser load when loggedIn = 5', () => {

        let loggedIn = 5


        let wrapper = shallow(<DreadPirate store={store} loggedIn={loggedIn} />);

        wrapper.find(Nav).length === 1
        wrapper.find(GuestUser).length === 1
    })

    it('UserFavorites and GuestUser load when loggedIn = 6', () => {

        let loggedIn = 6


        let wrapper = shallow(<DreadPirate store={store} loggedIn={loggedIn} />);

        wrapper.find(Nav).length === 1
        wrapper.find(GuestUser).length === 1
    })

    it('UserFavorites and GuestUser load when loggedIn = 7', () => {

        let loggedIn = 7


        let wrapper = shallow(<DreadPirate store={store} loggedIn={loggedIn} />);

        wrapper.find(Nav).length === 1
        wrapper.find(About).length === 1
    })
})
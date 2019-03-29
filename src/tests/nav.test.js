import React from 'react';

import { shallow, mount } from 'enzyme';
import store from '../store';

import { Nav } from '../nav/nav';


describe('<Nav />', () => {


    it('render without crashing', () => {

        shallow(<Nav store={store} />);
    })

    it('clickAbout is called when loggedIn = 0', () => {

        let loggedIn = 0

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().clickAbout = jest.fn();

        form.update()

        form.find('.aboutLink').simulate('click')

        expect(form.find('.aboutLink').length).toEqual(1)
        expect(form.instance().clickAbout).toHaveBeenCalled()
    })

    it('loginClick is called when loggedIn = 0', () => {

        let loggedIn = 0

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().loginClick = jest.fn();

        form.update()

        form.find('.loginLink').simulate('click')

        expect(form.find('.loginLink').length).toEqual(1)
        expect(form.instance().loginClick).toHaveBeenCalled()
    })

    it('clickAbout is called when loggedIn = 1', () => {

        let loggedIn = 1

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().clickAbout = jest.fn();

        form.update()

        form.find('.aboutLink').simulate('click')

        expect(form.find('.aboutLink').length).toEqual(1)
        expect(form.instance().clickAbout).toHaveBeenCalled()
    })
    //2
    it('clickAbout is called when loggedIn = 2', () => {

        let loggedIn = 2

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().clickAbout = jest.fn();

        form.update()

        form.find('.aboutLink').simulate('click')

        expect(form.find('.aboutLink').length).toEqual(1)
        expect(form.instance().clickAbout).toHaveBeenCalled()
    })
    //3
    it('clickAbout is called when loggedIn = 3', () => {

        let loggedIn = 3

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().clickAbout = jest.fn();

        form.update()

        form.find('.aboutLink').simulate('click')

        expect(form.find('.aboutLink').length).toEqual(1)
        expect(form.instance().clickAbout).toHaveBeenCalled()
    })

    it('logoutClick is called when loggedIn = 3', () => {

        let loggedIn = 3

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().logoutClick = jest.fn();

        form.update()

        form.find('.logoutLink').simulate('click')

        expect(form.find('.logoutLink').length).toEqual(1)
        expect(form.instance().logoutClick).toHaveBeenCalled()
    })

    it('editUserFavs is called when loggedIn = 3', () => {

        let loggedIn = 3

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().editUserFavs = jest.fn();

        form.update()

        form.find('.favsLink').simulate('click')

        expect(form.find('.favsLink').length).toEqual(1)
        expect(form.instance().editUserFavs).toHaveBeenCalled()
    })
    //4
    it('clickAbout is called when loggedIn = 4', () => {

        let loggedIn = 4

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().clickAbout = jest.fn();

        form.update()

        form.find('.aboutLink').simulate('click')

        expect(form.find('.aboutLink').length).toEqual(1)
        expect(form.instance().clickAbout).toHaveBeenCalled()
    })

    it('logoutClick is called when loggedIn = 4', () => {

        let loggedIn = 4

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().logoutClick = jest.fn();

        form.update()

        form.find('.logoutLink').simulate('click')

        expect(form.find('.logoutLink').length).toEqual(1)
        expect(form.instance().logoutClick).toHaveBeenCalled()
    })

    it('returnGame is called when loggedIn = 4', () => {

        let loggedIn = 4

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().returnGame = jest.fn();

        form.update()

        form.find('.playLink').simulate('click')

        expect(form.find('.playLink').length).toEqual(1)
        expect(form.instance().returnGame).toHaveBeenCalled()
    })
    //5
    it('clickAbout is called when loggedIn = 5', () => {

        let loggedIn = 5

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().clickAbout = jest.fn();

        form.update()

        form.find('.aboutLink').simulate('click')

        expect(form.find('.aboutLink').length).toEqual(1)
        expect(form.instance().clickAbout).toHaveBeenCalled()
    })

    it('signUpClick is called when loggedIn = 5', () => {

        let loggedIn = 5

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().signUpClick = jest.fn();

        form.update()

        form.find('.joinLink').simulate('click')

        expect(form.find('.joinLink').length).toEqual(1)
        expect(form.instance().signUpClick).toHaveBeenCalled()
    })

    it('loginClick is called when loggedIn = 5', () => {

        let loggedIn = 5

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().loginClick = jest.fn();

        form.update()

        form.find('.loginLink').simulate('click')

        expect(form.find('.loginLink').length).toEqual(1)
        expect(form.instance().loginClick).toHaveBeenCalled()
    })
    //6
    it('clickAbout is called when loggedIn = 6', () => {

        let loggedIn = 6

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().clickAbout = jest.fn();

        form.update()

        form.find('.aboutLink').simulate('click')

        expect(form.find('.aboutLink').length).toEqual(1)
        expect(form.instance().clickAbout).toHaveBeenCalled()
    })

    it('signUpClick is called when loggedIn = 6', () => {

        let loggedIn = 6

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().signUpClick = jest.fn();

        form.update()

        form.find('.joinLink').simulate('click')

        expect(form.find('.joinLink').length).toEqual(1)
        expect(form.instance().signUpClick).toHaveBeenCalled()
    })

    it('loginClick is called when loggedIn = 6', () => {

        let loggedIn = 6

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().loginClick = jest.fn();

        form.update()

        form.find('.loginLink').simulate('click')

        expect(form.find('.loginLink').length).toEqual(1)
        expect(form.instance().loginClick).toHaveBeenCalled()
    })
    //7
    it('clickReturn is called when loggedIn = 7', () => {

        let loggedIn = 7

        let form = mount(<Nav store={store} loggedIn={loggedIn} />)

        form.instance().clickReturn = jest.fn();

        form.update()

        form.find('.returnLink').simulate('click')

        expect(form.find('.returnLink').length).toEqual(1)
        expect(form.instance().clickReturn).toHaveBeenCalled()
    })

})
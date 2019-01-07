import React from 'react';

import { shallow, mount } from 'enzyme';


import { UserLogin } from '../login_signup/userLogin'


describe('<UserLogin />', () => {


    const test_username = 'ricksanchez';
    const test_password = 'test9033';



    it('render without crashing', () => {

        shallow(<UserLogin />);
    })

    it('submit login form check user/pass values', () => {

        let username = test_username
        let password = test_password

        let credentials = {
            username: test_username,
            password: test_password
        }

        let form = mount(<UserLogin username={test_username} password={password} />)

        form.instance().loginCheck = jest.fn();

        form.update()

        const usernameInput = form.find('.usernameField')
        usernameInput.value = credentials.username

        const passwordInput = form.find('.passwordField')
        passwordInput.value = credentials.password

        form.find('.logInButton').simulate('submit')

        expect(form.find('.logInButton').length).toEqual(1)
        expect(form.instance().loginCheck).toHaveBeenCalled()
        expect(usernameInput.value).toBe('ricksanchez')
        expect(passwordInput.value).toBe('test9033')
    })

    it('bypassLogin is called', () => {

        let form = mount(<UserLogin />)

        form.instance().bypassLogin = jest.fn();

        form.update()

        form.find('.bypassButton').simulate('click')

        expect(form.find('.bypassButton').length).toEqual(1)
        expect(form.instance().bypassLogin).toHaveBeenCalled()
    })

    it('signUpScreen is called', () => {

        let form = mount(<UserLogin />)

        form.instance().signUpScreen = jest.fn();

        form.update()

        form.find('.signUpButton').simulate('click')

        expect(form.find('.signUpButton').length).toEqual(1)
        expect(form.instance().signUpScreen).toHaveBeenCalled()
    })

    it('cancel is called', () => {

        let form = mount(<UserLogin />)

        form.instance().cancel = jest.fn();

        form.update()

        form.find('.cancelButton').simulate('click')

        expect(form.find('.cancelButton').length).toEqual(1)
        expect(form.instance().cancel).toHaveBeenCalled()
    })

})
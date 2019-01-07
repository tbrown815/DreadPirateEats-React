import React from 'react';

import { shallow, mount } from 'enzyme';


import { UserSignUp } from '../login_signup/userSignUp'


describe('<UserSignUp />', () => {


    const test_username = 'ricksanchez';
    const test_password = 'test9033';
    const test_email = 'ricksanchez@test.com'



    it('render without crashing', () => {

        shallow(<UserSignUp />);
    })

    it('submit login form userCheck user/pass values', () => {

        let credentials = {
            username: test_username,
            password: test_password,
            passwordConf: test_password,
            email: test_email
        }

        let form = mount(<UserSignUp />)

        form.instance().userCheck = jest.fn();

        form.update()

        const usernameInput = form.find('.usernameField')
        usernameInput.value = credentials.username

        const passwordInput = form.find('.passwordField')
        passwordInput.value = credentials.password

        const passwordConfInput = form.find('.passwordConfField')
        passwordConfInput.value = credentials.passwordConf

        const emailInput = form.find('.emailField')
        emailInput.value = credentials.email


        form.find('.joinButton').simulate('submit')

        expect(form.find('.joinButton').length).toEqual(1)
        expect(form.instance().userCheck).toHaveBeenCalled()
        expect(usernameInput.value).toBe('ricksanchez')
        expect(passwordInput.value).toBe('test9033')
        expect(passwordConfInput.value).toBe('test9033')
        expect(emailInput.value).toBe('ricksanchez@test.com')
    })

    it('signUpScreen is called', () => {

        let form = mount(<UserSignUp />)

        form.instance().callUserLogin = jest.fn();

        form.update()

        form.find('.logInButton').simulate('click')

        expect(form.find('.logInButton').length).toEqual(1)
        expect(form.instance().callUserLogin).toHaveBeenCalled()
    })

    it('cancel is called', () => {

        let form = mount(<UserSignUp />)

        form.instance().cancel = jest.fn();

        form.update()

        form.find('.cancelButton').simulate('click')

        expect(form.find('.cancelButton').length).toEqual(1)
        expect(form.instance().cancel).toHaveBeenCalled()
    })


})
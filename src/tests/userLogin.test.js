import React from 'react';

import { shallow, mount, render, configure } from 'enzyme';
import store from '../store';


import {UserLogin} from '../login_signup/userLogin'

import { signupUser, userLogin, cancelState } from '../actions/actions';





describe('<UserLogin />', () => {


    const test_username = 'ricksanchez';
    const test_password = 'test9033';
    const test_currentUser = {id: "5c298521c24ad70017da3cda", username: "ricksanchez", email: "ricksanchez@test.com"};
    const test_authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMyOTg1MjFjMjRhZDcwMDE3ZGEzY2RhIiwidXNlcm5hbWUiOiJyaWNrc2FuY2hleiIsImVtYWlsIjoicmlja3NhbmNoZXpAdGVzdC5jb20ifSwiaWF0IjoxNTQ2NTY4NzM3LCJleHAiOjE1NDcwMDA3MzcsInN1YiI6InJpY2tzYW5jaGV6In0.8i7zIOY1RTw4m58woD6J_OkC3F1UO57Zp6pMtsHyfW4'
    const test_errorMessage = 'This is a test error!';

    
    it('render without crashing', () => {

        shallow(<UserLogin />);
    })


    it.only('form', () => {

        let username = test_username;
        let password = test_password;

        let event = {
            username: test_username,
            password: test_password
        }

        const fakeEvent = { preventDefault: () => console.log('preventDefault') }


        const dispatch = jest.fn()
        const wrapper = mount(<UserLogin loginCheck={dispatch} username={username} 
            password={password}/>)

        wrapper.find('input[id="username"]').instance().value = username
        wrapper.find('input[id="password"]').instance().value = password

        wrapper.simulate('submit')

        expect(dispatch).toHaveBeenCalledWith(username, password)

    })

})
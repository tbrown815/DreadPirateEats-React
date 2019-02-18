import React from 'react';

import { shallow, mount } from 'enzyme';
import store from '../store';

import { About } from '../nav/about';


describe('<About />', () => {


    it('render without crashing', () => {

        shallow(<About store={store} />);
    })

    it('clickReturn is called', () => {

        let form = mount(<About />)

        form.instance().clickReturn = jest.fn();

        form.update()

        form.find('.returnButtone').simulate('click')

        expect(form.find('.returnButtone').length).toEqual(1)
        expect(form.instance().clickReturn).toHaveBeenCalled()
    })


})
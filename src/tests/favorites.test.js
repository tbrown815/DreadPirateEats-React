import React from 'react';

import { shallow } from 'enzyme';
import store from '../store';


import Favorites from '../favorites/favorites'
import UserFavorites from '../favorites/userFavorites';
import SearchFavorites from '../favorites/searchForFavs';

describe('<Favorites />', () => {

    it('render without crashing', () => {
        shallow(<Favorites store={store} />).dive();
    })


    it('UserFavorites loads', () => {

        const favState = 0

        let wrapper = shallow(<Favorites store={store} favState={favState} />);

        wrapper.find(UserFavorites).length === 1

    })

    it('SearchFavorites loads', () => {

        const favState = 1

        let wrapper = shallow(<Favorites store={store} favState={favState} />);

        wrapper.find(SearchFavorites).length === 1

    })


})
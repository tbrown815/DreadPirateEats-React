import React from 'react';

import { shallow, mount } from 'enzyme';
import store from '../store';

import { SearchFavorites } from '../favorites/searchForFavs';


describe('<SearchFavorites />', () => {


    const TEST_NEWFAVS = [
        { restaurantYelpId: "6XTCsnjpa_fC_yjvvGbXQQ", url: "https://www.yelp.com/biz/lstc-refectory-chicago-2?…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "LSTC Refectory", address: "1100 E 55th St", city: "Chicago" },
        { restaurantYelpId: "IX34m-olKrlEeeEIXEPh9g", url: "https://www.yelp.com/biz/francos-ristorante-chicag…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Franco's Ristorante", address: "300 W 31st St", city: "Chicago" },
        { restaurantYelpId: "BwkeC6JB_4fIVpth2VUyQA", url: "https://www.yelp.com/biz/valois-chicago?adjust_cre…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Valois", address: "1518 E 53rd St", city: "Chicago" },
        { restaurantYelpId: "t5g_E_xDCDO5YXFFGSNLQA", url: "https://www.yelp.com/biz/virtue-restaurant-chicago…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Virtue Restaurant", address: "1462 E 53rd St", city: "Chicago" },
        { restaurantYelpId: "-56w9imfIDro7JxTZ9W1lg", url: "https://www.yelp.com/biz/taqueria-varitas-chicago?…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "Taqueria Varitas", address: "700 E 47th St", city: "Chicago" },
        { restaurantYelpId: "3xvQksDVZQy_nCFwweyoZw", url: "https://www.yelp.com/biz/the-sit-down-cafe-and-sus…business_search&utm_source=bnY6rIZX82ygS1i4Bh7Wlg", restaurantName: "The Sit Down Cafe & Sushi Bar", address: "1312 E 53rd St", city: "Chicago" }
    ]

    const TEST_NAME = 'steak'
    const TEST_ZIP = '60615'
    const TEST_ERRORMSG = 'This is a test error!';



    it('render without crashing', () => {

        shallow(<SearchFavorites store={store} newFavorites={TEST_NEWFAVS} />);
    })

    it('submit searchLocation form check values', () => {

        const restaurantName = TEST_NAME
        const restaurantZip = TEST_ZIP
        const errorMessage = TEST_ERRORMSG

        let form = mount(<SearchFavorites store={store} restaurantName={TEST_NAME} restaurantZip={TEST_ZIP} newFavorites={TEST_NEWFAVS}
            errorMessage={TEST_ERRORMSG} />)

        form.instance().searchLocation = jest.fn();

        form.update()

        const restaurantNameInput = form.find('.restaurantNameBox')
        restaurantNameInput.value = restaurantName

        const restaurantZipInput = form.find('.userLocationFieldBox')
        restaurantZipInput.value = restaurantZip

        form.find('.favSearchButton').simulate('submit')

        expect(form.find('.favSearchButton').length).toEqual(1)
        expect(form.instance().searchLocation).toHaveBeenCalled()
        expect(restaurantNameInput.value).toBe(TEST_NAME)
        expect(restaurantZipInput.value).toBe(TEST_ZIP)
        expect(errorMessage).toBe(TEST_ERRORMSG)


    })

    it('saveToFavs is called', () => {

        const newFavorites = TEST_NEWFAVS
        const userMessage = TEST_ERRORMSG

        let form = mount(<SearchFavorites store={store} newFavorites={TEST_NEWFAVS}
            userMessage={TEST_ERRORMSG} />)

        form.instance().saveToFavs = jest.fn();

        form.update()

        form.find('.saveToFavsButton').simulate('submit')

        expect(form.find('.saveToFavsButton').length).toEqual(1)
        expect(form.instance().saveToFavs).toHaveBeenCalled()
        expect(userMessage).toBe(TEST_ERRORMSG)

    })

    it('changeSelectedFavState is called', () => {

        const newFavorites = TEST_NEWFAVS
        const userMessage = TEST_ERRORMSG

        const data = {
            restaurantYelpId: "6XTCsnjpa_fC_yjvvGbXQQ"
        }

        let form = mount(<SearchFavorites store={store} newFavorites={TEST_NEWFAVS}
            userMessage={TEST_ERRORMSG} />)

        form.instance().changeSelectedFavState = jest.fn();

        form.update()

        form.find(`input[value="${data.restaurantYelpId}"]`).simulate('change')

        expect(form.find(`input[value="${data.restaurantYelpId}"]`).length).toEqual(1)
        expect(form.instance().changeSelectedFavState).toHaveBeenCalled()

    })




})
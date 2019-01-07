import React from 'react';

import { shallow, mount } from 'enzyme';
import store from '../store';

import { UserFavorites } from '../favorites/userFavorites';


describe('<UserFavorites />', () => {


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

    const TEST_EDITFAVOBJ = [
        {
            id: "5c29700c4af11238840e227b",
            userRef: "ricksanchez",
            restaurantName: "Acadian",
            restaurantAlias: "acadian-grille-scratch-kitchen-omaha",
            restaurantYelpId: "rKd_24k2WevELAR6yoExew"
        }
    ]

    const TEST_NAME = 'steak'
    const TEST_ZIP = '60615'
    const TEST_ERRORMSG = 'This is a test error!';

    const TEST_AUTHTOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMwZGI2MjE1ZTJkN2IyNmZjNmM2MmI3IiwidXNlcm5hbWUiOiJyaWNrc2FuY2hleiIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSJ9LCJpYXQiOjE1NDY4MDYwNjIsImV4cCI6MTU0NzIzODA2Miwic3ViIjoicmlja3NhbmNoZXoifQ.YxB_CANh4f-GZu_2CdN8tYHMh01Z8VIs4wrXFbRNuOk"
    const TEST_USERTOKEN = "5c0db6215e2d7b26fc6c62b7"



    it('render without crashing', () => {
        const dispatch = jest.fn();

        shallow(<UserFavorites store={store} dispatch={dispatch} />);
    })

    it('editSelectedFavState searchLocation form check values', () => {

        const noFavsMessage = TEST_ERRORMSG
        const grubJoints = TEST_GRUBJOINTS;
        const editFavState = 0
        const dispatch = jest.fn();



        let form = mount(<UserFavorites store={store} dispatch={dispatch} restaurantName={TEST_NAME}
            errorMessage={TEST_ERRORMSG} grubJoints={grubJoints} editFavState={editFavState} />)

        form.instance().editSelectedFavState = jest.fn();

        form.update()

        form.find('.editButton').simulate('submit')

        expect(form.find('.editButton').length).toEqual(1)
        expect(form.instance().editSelectedFavState).toHaveBeenCalled()
        expect(noFavsMessage).toBe(TEST_ERRORMSG)
    })

    it('changeSelectedFavState is called', () => {

        const newFavorites = TEST_NEWFAVS
        const userMessage = TEST_ERRORMSG
        const editFavState = 0
        const grubJoints = TEST_GRUBJOINTS;
        const dispatch = jest.fn();

        const data = {
            id: "5c2985f3c24ad70017da3cdc"
        }

        let form = mount(<UserFavorites store={store} dispatch={dispatch} newFavorites={TEST_NEWFAVS} grubJoints={grubJoints} editFavState={editFavState}
            userMessage={TEST_ERRORMSG} />)

        form.instance().changeSelectedFavState = jest.fn();

        form.update()

        form.find(`input[value="${data.id}"]`).simulate('change')

        expect(form.find(`input[value="${data.id}"]`).length).toEqual(1)
        expect(form.instance().changeSelectedFavState).toHaveBeenCalled()

    })

    it('updateFavsState is called', () => {

        const newFavorites = TEST_NEWFAVS
        const userMessage = TEST_ERRORMSG
        const editFavState = 0
        const grubJoints = TEST_GRUBJOINTS;
        const dispatch = jest.fn();

        const data = {
            id: "5c2985f3c24ad70017da3cdc"
        }

        let form = mount(<UserFavorites store={store} dispatch={dispatch} newFavorites={TEST_NEWFAVS} grubJoints={grubJoints} editFavState={editFavState}
            userMessage={TEST_ERRORMSG} />)

        form.instance().updateFavsState = jest.fn();

        form.update()

        form.find(`.addFavsButton`).simulate('click')

        expect(form.find(`.addFavsButton`).length).toEqual(1)
        expect(form.instance().updateFavsState).toHaveBeenCalled()

    })

    it('updateFavsState is called', () => {

        const newFavorites = TEST_NEWFAVS
        const userMessage = TEST_ERRORMSG
        const editFavState = 1
        const grubJoints = TEST_GRUBJOINTS;
        const dispatch = jest.fn();
        let newFavName = 'New Name'
        let editFavOjb = TEST_EDITFAVOBJ

        const data = {
            id: "5c2985f3c24ad70017da3cdc"
        }

        let form = mount(<UserFavorites store={store} dispatch={dispatch} newFavorites={TEST_NEWFAVS} grubJoints={grubJoints} editFavState={editFavState}
            editFavOjb={editFavOjb} userMessage={TEST_ERRORMSG} />)

        form.instance().editFavCall = jest.fn();

        form.update()

        const newFavNameInput = form.find('.editFavTextBox')
        newFavNameInput.value = newFavName

        form.find(`.editButton`).simulate('submit')

        expect(form.find(`.editButton`).length).toEqual(1)
        expect(form.instance().editFavCall).toHaveBeenCalled()
        expect(newFavNameInput.value).toBe('New Name')
    })

    it('cancelEditFavCall is called', () => {

        const editFavState = 1
        const grubJoints = TEST_GRUBJOINTS;
        let editFavOjb = TEST_EDITFAVOBJ
        const dispatch = jest.fn();

        let form = mount(<UserFavorites store={store} dispatch={dispatch} newFavorites={TEST_NEWFAVS} grubJoints={grubJoints} editFavState={editFavState}
            editFavOjb={editFavOjb} />)

        form.instance().cancelEditFavCall = jest.fn();

        form.update()

        form.find('.editCancelButton').simulate('click')

        expect(form.find('.editCancelButton').length).toEqual(1)
        expect(form.instance().cancelEditFavCall).toHaveBeenCalled()
    })











})
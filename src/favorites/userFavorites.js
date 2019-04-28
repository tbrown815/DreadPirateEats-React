import React from 'react';
import { connect } from 'react-redux'
import { REACT_APP_FAV_YELP_URL } from '../config'
import { setErrorState, spinner } from '../actions/actions'
import { setSelectedFav, callViewFavs, searchNewFavs, getFavsSetState, updateFavCall, callDelFavs } from '../actions/favActions'


import './favorites.css';

export class UserFavorites extends React.Component {

    //gets users favs
    componentDidMount() {

        let userToken = this.props.userToken
        let authToken = this.props.authToken

        this.props.dispatch(spinner())

        this.props.dispatch(callViewFavs(userToken, authToken))
    }
    //sets state for user to search for new favs
    updateFavsState(event) {
        event.preventDefault();

        this.props.dispatch(searchNewFavs())

    }
    //set the selected potential fav to state so it can be modified in future action
    changeSelectedFavState(event) {

        let selectedFav = event.target.value;

        return this.props.dispatch(setSelectedFav(selectedFav))

    }
    //using selecedFavstate selected fav can be modified
    editSelectedFavState(event) {
        event.preventDefault();
        let findFav = this.props.selectedFavorite;
        let authToken = this.props.authToken

        if (findFav === null || findFav === undefined || findFav === '') {
            return this.props.dispatch(setErrorState('Please select a favorite'))

        }
        else {
            return this.props.dispatch(getFavsSetState(findFav, authToken))
        }
    }
    //saves changes to the fav
    editFavCall(event) {
        event.preventDefault();

        let newFavName = this.newFavName.value
        let favId = this.favId.value
        let userToken = this.props.userToken
        let authToken = this.props.authToken

        return this.props.dispatch(updateFavCall(newFavName, favId, userToken, authToken))
    }
    //deletes the fav
    deleteFavCall(event) {
        event.preventDefault();

        let authToken = this.props.authToken
        let userToken = this.props.userToken
        let favId = this.props.selectedFavorite

        this.props.dispatch(callDelFavs(authToken, userToken, favId))
    }

    cancelEditFavCall(event) {
        event.preventDefault();

        let userToken = this.props.userToken
        let authToken = this.props.authToken

        this.props.dispatch(callViewFavs(userToken, authToken))

    }

    render() {



        if (this.props.editFavState === 0) {
            //display user favs
            return (

                <div className='userFavsPage'>
                    <h2 className='favsTitle'>Your Dread Pirate Eats favorites!</h2>
                    <br />
                    <form className='editFavForm' id='editFavForm' title='searchForm' onSubmit={event => this.editSelectedFavState(event)}>

                        <span role='alert' className='warning'>{this.props.noFavsMessage}</span><br />

                        <ul className='listFavs'>
                            {this.props.grubJoints.map(data =>
                                <li key={data.restaurantYelpId} className='mapDisplayResults'>
                                    <input type='radio' className='mapDisplayRadio radioButton' title={data.restaurantName} name='mapDisplayRadio' value={data.id}
                                        onChange={event => this.changeSelectedFavState(event)} />
                                    <a href={REACT_APP_FAV_YELP_URL + data.restaurantAlias} target='_blank' rel='noopener noreferrer'>{data.restaurantName}</a>

                                </li>
                            )}
                        </ul>
                        <span role='alert' className='warning'>{this.props.errorMessage}</span><br />
                        <br />
                        <button type='submit' name='submit' id='editButton' className='editButton dpe_button'>Edit Favorite</button>
                    </form>

                    <br />
                    <button id='addFavsButton' className='addFavsButton'
                        onClick={event => this.updateFavsState(event)}>Add new Favorites!</button>
                    <br /><br />
                    <div className='yelpsection'>
                        <p className='yelpInfo'>Search info provided by:</p>
                        <a href='https://www.yelp.com' target='_blank' rel='noopener noreferrer'><img className='yelpImg' src={require('../images/Yelp_trademark_RGB_outline.png')} alt='yelp logo' /></a>
                    </div>
                </div>

            )
        }

        if (this.props.editFavState === 1) {
            //displays fav edit sections, allowing user to edit/delete
            return (

                <div className='userFavsPage'>
                    <h2 className='favsTitle'>Your Dread Pirate Eats favorites!</h2>
                    <br />
                    <form className='editFavs' onSubmit={event => this.editFavCall(event)}>

                        <span className='restaurantToEdit'>Edit {this.props.editFavOjb.restaurantName}</span>
                        <br />
                        <li key={this.props.editFavOjb.id} className='editResults'>
                            <p><input type='text' className='editFavTextBox' id='editFavTextBox' name='editFavTextBox' placeholder={this.props.editFavOjb.restaurantName}
                                ref={newFavName => (this.newFavName = newFavName)} /></p>
                            <input type='text' className='hidden' id='hiddenIdField' value={this.props.editFavOjb.id}
                                readOnly ref={favId => (this.favId = favId)} />

                        </li>

                        <br />
                        <button type='submit' name='submit' id='editButton' className='editButton'>Save Change</button>
                    </form>
                    <br />
                    <button type='delete' name='delete' id='editDeleteButton' className='editDeleteButton dpe_button'
                        onClick={event => this.deleteFavCall(event)}>Delete Favorite</button>
                    <br /><br />
                    <button type='cancel' name='cancel' id='editCancelButton' className='editCancelButton dpe_button'
                        onClick={event => this.cancelEditFavCall(event)}>Cancel</button>



                    <br /><br />
                    <div className='yelpsection'>
                        <p className='yelpInfo'>Search info provided by:</p>
                        <a href='https://www.yelp.com' target='_blank' rel='noopener noreferrer'><img className='yelpImg' src={require('../images/Yelp_trademark_RGB_outline.png')} alt='yelp logo' /></a>
                    </div>
                </div>


            )
        }


    }
}

const mapStateToProps = state => ({
    userToken: state.userToken,
    authToken: state.authToken,
    errorMessage: state.errorMessage,
    noFavsMessage: state.noFavsMessage,
    grubJoints: state.grubJoints,
    editFavState: state.editFavState,
    selectedFavorite: state.selectedFavorite,
    editFavOjb: state.editFavOjb

})

export default connect(mapStateToProps)(UserFavorites)
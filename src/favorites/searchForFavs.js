import React from 'react';
import { connect } from 'react-redux'
import { setErrorState } from '../actions/actions'
import { performYelpCall, setSelectedFav, callAddNewFav } from '../actions/favActions'

import './favorites.css';

export class SearchFavorites extends React.Component {


    searchLocation(event) {
        event.preventDefault();
        const restaurantName = this.restaurantName.value;
        const restaurantZip = this.restaurantZip.value;
        const publicSort = this.props.publicSort;
        // performYelpCall with provide restaurant name and zipcode
        return this.props.dispatch(performYelpCall(restaurantName, restaurantZip, publicSort))
    }

    saveToFavs(event2) {
        event2.preventDefault();

        let yelpID = this.props.selectedFavorite

        let userToken = this.props.userToken
        let authToken = this.props.authToken

        //if user clicks to save w/o a selection they will rcv error
        if (yelpID === null || yelpID === undefined || yelpID === '') {
            return this.props.dispatch(setErrorState('Please search for and select a restaurant'))

        }
        //select new fav callAddNewFav to add to user favs in DB
        else {
            let restaurant = this.props.newFavorites.filter(data => {
                return data.restaurantYelpId === yelpID
            })


            return this.props.dispatch(callAddNewFav(restaurant, userToken, authToken))
        }
    }
    //set the selected potential fav to state so it can be added in future action
    changeSelectedFavState(event) {

        let selectedFav = event.target.value;

        return this.props.dispatch(setSelectedFav(selectedFav))

    }


    render() {

        //search form displayed, once search submit results displayed below
        return (

            <div>

                <form className='searchForFavs' id='searchForFavsForm' title='searchForFavsForm' onSubmit={event => this.searchLocation(event)}>
                    <h2 className='searchTitle'>Add a new Favorite!</h2>

                    <p className='searchFormText'>Enter restaurant name:</p>
                    <input className='searchFormBox restaurantNameBox' type='text' id='restaurantNameField' title='restaurantNameField' ref={restaurantName => (this.restaurantName = restaurantName)} />
                    <br />
                    <p className='searchFormText'>Enter ZIP Code:</p>
                    <input className='searchFormBox userLocationFieldBox' type='number' min='00000' max='99999' id='userLocationField' title='userLocationField' ref={restaurantZip => (this.restaurantZip = restaurantZip)} />
                    <br /><br />
                    <span id='errorMessage' role='alert' className='warning'>{this.props.errorMessage}</span>
                    <br /><br />

                    <button type='submit' name='submit' id='searchButton' className='favSearchButton searchButton dpe_button'>Search</button>
                </form>

                <br />
                <h2>Search Results</h2>

                <form className='saveToFavsForm' id='saveToFavsForm' title='saveToFavsForm' onSubmit={event => this.saveToFavs(event)}>
                    <span className='userMessage' role='alert'>{this.props.userMessage}</span>
                    <ul>

                        {this.props.newFavorites.map(data =>
                            <li key={data.restaurantYelpId} className='mapDisplayResults'>
                                <input type='radio' id='newFavSelect' title='newFavSelect' className='mapDisplayRadio radioButton' name='mapDisplayRadio' value={data.restaurantYelpId}
                                    onChange={event => this.changeSelectedFavState(event)} />
                                <a href={data.url} target='_blank' rel='noopener noreferrer'>{data.restaurantName}:</a>
                                <br /> <span className='searchData'>{data.address}, {data.city}</span>
                            </li>
                        )}
                    </ul>
                    <span id='errorMessage' role='alert' className='warning'>{this.props.errorMessage}</span>

                    <br />
                    <button type='submit' name='submit' id='saveToFavsButton' className='saveToFavsButton dpe_button'>Save Selected</button>
                    <br /><br />

                </form>
                <span className='yelpInfo'>Search and Restaurant info provided by:
                        <a href='https://www.yelp.com' target='_blank' rel='noopener noreferrer'><img className='yelpImg' src={require('../images/Yelp_trademark_RGB_outline.png')} alt='Yelp logo' /> </a></span>
            </div>


        )
    }
}

const mapStateToProps = state => ({
    userToken: state.userToken,
    authToken: state.authToken,
    errorMessage: state.errorMessage,
    newFavorites: state.newFavorites,
    selectedFavorite: state.selectedFavorite,
    publicSort: state.publicSort,
    userMessage: state.userMessage

})

export default connect(mapStateToProps)(SearchFavorites)
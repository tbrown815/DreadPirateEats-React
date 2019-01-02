import React from 'react';
import { connect } from 'react-redux'
import { setErrorState } from '../actions/actions'
import { performYelpCall, setSelectedFav, callAddNewFav } from '../actions/favActions'

import './favorites.css';

class SearchFavorites extends React.Component {


    searchLocation(event) {
        event.preventDefault();
        console.log('search')
        const restaurantName = this.restaurantName.value;
        const restaurantZip = this.restaurantZip.value;
        const publicSort = this.props.publicSort;

        return this.props.dispatch(performYelpCall(restaurantName, restaurantZip, publicSort))
    }

    saveToFavs(event2) {
        event2.preventDefault();

        let yelpID = this.props.selectedFavorite

        let userToken = this.props.userToken
        let authToken = this.props.authToken

        console.log('restaurantId to save: ', yelpID)

        if(yelpID === null || yelpID === undefined || yelpID === '') {
            return this.props.dispatch(setErrorState('Please search for and select a restaurant'))

        }

        else {
        let restaurant = this.props.newFavorites.filter(data => {
            return data.restaurantYelpId === yelpID
        })

        console.log('restaurant to save: ', restaurant)


        return this.props.dispatch(callAddNewFav(restaurant, userToken, authToken))
    }
    }

    changeSelectedFavState(event) {
      //  event.preventDefault();

        console.log('selected: ', event.target.value)
        let selectedFav = event.target.value;

        return this.props.dispatch(setSelectedFav(selectedFav))
        
    }


    render() {
        return (

            <div>

                <form className='searchForFavs' id='searchForFavsForm' title='searchForFavsForm' onSubmit={event => this.searchLocation(event)}>
                    <h2 className='searchTitle'>Add a new Favorite!</h2>

                    <p className='searchFormText'>Enter restaurant name:</p>
                    <input className='searchFormBox' type='text' id='restaurantNameField' title='restaurantNameField' ref={restaurantName => (this.restaurantName = restaurantName)} />
                    <br />
                    <p className='searchFormText'>Enter ZIP Code:</p>
                    <input className='searchFormBox' type='number' min='00000' max='99999' id='userLocationField' title='userLocationField' ref={restaurantZip => (this.restaurantZip = restaurantZip)} />
                    <br /><br />
                    <span id='errorMessage' role='alert' className = 'warning'>{this.props.errorMessage}</span>
                    <br /><br />

                    <button type='submit' name='submit' id='searchButton' className='searchButton dpe_button'>Search</button>
                </form>

                <br />
                <h2>Search Results</h2>

                {console.log('props.newFavs: ', this.props.newFavorites)}

                <form className='saveToFavsForm' id='saveToFavsForm'  title='saveToFavsForm' onSubmit={event => this.saveToFavs(event)}>
                        <span className='userMessage' role='alert'>{this.props.userMessage}</span>
                    <ul>

                        {this.props.newFavorites.map(data =>
                            <li key={data.restaurantYelpId} className='mapDisplayResults'>
                                <input type='radio' id='newFavSelect' title='newFavSelect' className='mapDisplayRadio' name='mapDisplayRadio' value={data.restaurantYelpId}
                                    onChange={event => this.changeSelectedFavState(event)} />
                                <a href={data.url} target='_blank'>{data.restaurantName}:</a>
                                <br /> <span className='searchData'>{data.address}, {data.city}</span>
                            </li>
                        )}
                    </ul>
                    <span id='errorMessage' role='alert' className = 'warning'>{this.props.errorMessage}</span>

                    <br />
                    <button type='submit' name='submit' id='saveToFavsButton' className='saveToFavsButton dpe_button'>Save Selected</button>
                    <br /><br />

                </form>
                <span className='yelpInfo'>Search and Restaurant info provided by:
                        <a href='https://www.yelp.com' target='_blank'><img className='yelpImg' src={require('../images/Yelp_trademark_RGB_outline.png')} /> </a></span> 
            </div>


        )
    }
}

const mapStateToProps = state => ({
    userToken: state.userToken,
    authToken: state.authToken,
    errorMessage: state.errorMessage,
    userToken: state.userToken,
    newFavorites: state.newFavorites,
    selectedFavorite: state.selectedFavorite,
    publicSort: state.publicSort,
    userMessage: state.userMessage

})

export default connect(mapStateToProps)(SearchFavorites)
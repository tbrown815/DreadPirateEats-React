import React from 'react';
import { connect } from 'react-redux'
import { setErrorState } from '../actions/actions'
import { performYelpCall, setSelectedFav, callAddNewFav } from '../actions/favActions'


import './favorites.css';

//export default function Favorites(props) {
class SearchFavorites extends React.Component {


    searchLocation(event) {
        event.preventDefault();
        console.log('search')
        const resturantName = this.resturantName.value;
        const resturantZip = this.resturantZip.value;
        const publicSort = this.props.publicSort;

        return this.props.dispatch(performYelpCall(resturantName, resturantZip, publicSort))
    }

    saveToFavs(event2) {
        event2.preventDefault();

        let yelpID = this.props.selectedFavorite

        let userToken = this.props.userToken
        let authToken = this.props.authToken

        console.log('resturantId to save: ', yelpID)

        let resturant = this.props.newFavorites.filter(data => {
            return data.resturantYelpId === yelpID
        })

        console.log('resturant to save: ', resturant)


        return this.props.dispatch(callAddNewFav(resturant, userToken, authToken))
    }

    changeSelectedFavState(event) {
        event.preventDefault();

        console.log('selected: ', event.target.value)
        let selectedFav = event.target.value;

        return this.props.dispatch(setSelectedFav(selectedFav))
    }


    render() {
        return (

            <div>

                <form className='searchForFavs' onSubmit={event => this.searchLocation(event)}>
                    <h2>Add a new Favorite!</h2>

                    <p>Enter resturant name:</p>
                    <input type='text' ref={resturantName => (this.resturantName = resturantName)} />
                    <br />
                    <p>Enter City or Zipcode:</p>
                    <input type='text' ref={resturantZip => (this.resturantZip = resturantZip)} />
                    <br /><br />
                    <span id='errorMessage'>{this.props.errorMessage}</span>
                    <br /><br />

                    <button type='submit' name='submit' id='searchButton' className='searchButton dpe_button'>Search</button>
                </form>

                <br />
                <h2>Search Results</h2>

                {console.log('props.newFavs: ', this.props.newFavorites)}

                <form className='saveToFavsForm' onSubmit={event => this.saveToFavs(event)}>
                    <ul>
                        <span className='userMessage'>{this.props.userMessage}</span>
                        
                        {this.props.newFavorites.map(data =>
                            <li key={data.resturantYelpId} className='mapDisplayResults'>
                                <input type='radio' className='mapDisplayRadio' name='mapDisplayRadio' value={data.resturantYelpId}
                                    onChange={event => this.changeSelectedFavState(event)} />
                                <a href={data.url} target='_blank'>{data.resturantName}:</a>
                                <br /> {data.address}, {data.city}
                            </li>
                        )}
                    </ul>
                    <br />
                    <button type='submit' name='submit' id='saveToFavsButton' className='saveToFavsButton dpe_button'>Save Selected</button>
                    <br /><br />

                </form>

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

/*


Search

require for search - name, user zip

Results
Show top 5 only
Sort by Distance to entered zip - nice to have determin location
Save to DB - 'userRef', 'resturantName', 'resturantZip', 'resturantCost', 'resturantYelpId'



*/
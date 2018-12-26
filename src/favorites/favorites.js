import React from 'react';
import { connect } from 'react-redux'
import { setErrorState } from '../actions/actions'
import { performYelpCall, setSelectedFav, callAddNewFav } from '../actions/favActions'
import SearchFavorites from './searchForFavs'
import UserFavorites from './userFavorites'

import './favorites.css';

//export default function Favorites(props) {
export function Favorites(props) {


    if (props.favState === 0) {
        return (

            <div>
                <UserFavorites />

            </div>
        )
    }

    if (props.favState === 1) {
        return (

            <div>
                <SearchFavorites />

            </div>
        )
    }
}

const mapStateToProps = state => ({
    errorMessage: state.errorMessage,
    favState: state.favState
})

export default connect(mapStateToProps)(Favorites)

/*


Search

require for search - name, user zip

Results
Show top 5 only
Sort by Distance to entered zip - nice to have determin location
Save to DB - 'userRef', 'resturantName', 'resturantZip', 'resturantCost', 'resturantYelpId'



*/
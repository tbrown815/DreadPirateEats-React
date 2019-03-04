import React from 'react';
import { connect } from 'react-redux'

import SearchFavorites from './searchForFavs'
import UserFavorites from './userFavorites'

import './favorites.css';

export function Favorites(props) {

    //current favorites or search functions displayed depending on favState
    if (props.favState === 0) {
        return (

            <div role='region'>
                <UserFavorites />

            </div>
        )
    }

    if (props.favState === 1) {
        return (

            <div role='region'>
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


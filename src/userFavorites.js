import React from 'react';
import { connect } from 'react-redux'
import {REACT_APP_FAV_YELP_URL} from './config'
import { setErrorState } from './actions'
import { performYelpCall, setSelectedFav, callAddNewFav, callViewFavs, searchNewFavs } from './favActions'


import './favorites.css';

class UserFavorites extends React.Component {

    componentDidMount() {
        let userToken = localStorage.getItem('userToken')
        let authToken = localStorage.getItem('authToken')

        this.props.dispatch(callViewFavs(userToken, authToken))
    }

    updateFavsState(event) {
        event.preventDefault();

        this.props.dispatch(searchNewFavs())

    }

    changeSelectedFavState(event) {
        console.log('selected: ', event.target.value)
        let selectedFav = event.target.value;

        return this.props.dispatch(setSelectedFav(selectedFav))
    }

    editFavCall(event) {
        event.preventDefault();
        console.log('EDIT CALL')

    }


    render() {
        
        return (

            <div>
                <h2 className='modalTitle'>Your Dread Pirate Eats favorites!</h2>
                <br />
                <form className='editFavs' onSubmit={event => this.editFavCall(event)}>

                {this.props.noFavsMessage}<br/>
                {this.props.grubJoints.map(data => 
                        <li key={data.resturantYelpId} className='mapDisplayResults'>
                                <input type='radio' className='mapDisplayRadio' name='mapDisplayRadio' value={data.resturantYelpId}
                                    onChange={event => this.changeSelectedFavState(event)} />
                                <a href={REACT_APP_FAV_YELP_URL+data.resturantAlias} target='_blank'>{data.resturantName}</a>
                        </li>
                )}
                <br/>
                    <button type='submit' name='submit' id='editButton' className='editButton'>Edit Favorite</button>
                </form>


                <br />
                <span id='addFavsButton' className='addFavsButton'
                    onClick={event => this.updateFavsState(event)}>[Click to add new Favorites!]</span>
                
            </div>


        )
    }
}

const mapStateToProps = state => ({
    errorMessage: state.errorMessage,
    noFavsMessage: state.noFavsMessage,
        grubJoints: state.grubJoints

})

export default connect(mapStateToProps)(UserFavorites)

/*


Search

require for search - name, user zip

Results
Show top 5 only
Sort by Distance to entered zip - nice to have determin location
Save to DB - 'userRef', 'resturantName', 'resturantZip', 'resturantCost', 'resturantYelpId'



*/
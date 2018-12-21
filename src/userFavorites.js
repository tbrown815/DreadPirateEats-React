import React from 'react';
import { connect } from 'react-redux'
import { REACT_APP_FAV_YELP_URL } from './config'
import { setErrorState } from './actions'
import { performYelpCall, setSelectedFav, callAddNewFav, callViewFavs, searchNewFavs, getFavsSetState } from './favActions'


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
        event.preventDefault();

        console.log('selected: ', event.target.value)
        let selectedFav = event.target.value;

        return this.props.dispatch(setSelectedFav(selectedFav))
    }

    editSelectedFavState(event) {
        event.preventDefault();

        return this.props.dispatch(getFavsSetState())
    }

    editFavCall(event) {
        event.preventDefault();
        console.log('EDIT CALL')

    }


    render() {


        if (this.props.editFavState === 0) {

            return (

                <div>
                    <h2 className='favsTitle'>Your Dread Pirate Eats favorites!</h2>
                    <br />
                    <form className='editFavs' onSubmit={event => this.editSelectedFavState(event)}>

                        {this.props.noFavsMessage}<br />
                        {this.props.grubJoints.map(data =>
                            <li key={data.resturantYelpId} className='mapDisplayResults'>
                                <input type='radio' className='mapDisplayRadio' name='mapDisplayRadio' value={data.resturantYelpId}
                                    onChange={event => this.changeSelectedFavState(event)} />
                                <a href={REACT_APP_FAV_YELP_URL + data.resturantAlias} target='_blank'>{data.resturantName}</a>

                            </li>
                        )}
                        <br />
                        <button type='submit' name='submit' id='editButton' className='editButton'>Edit Favorite</button>
                    </form>


                    <br />
                    <button id='addFavsButton' className='addFavsButton'
                        onClick={event => this.updateFavsState(event)}>Add new Favorites!i</button>

                </div>

            )
        }

        if (this.props.editFavState === 1) {

            return (

                <div>
                    <h2 className='favsTitle'>Your Dread Pirate Eats favorites!</h2>
                    <br />
                    <form className='editFavs' onSubmit={event => this.editFavCall(event)}>

                        {this.props.noFavsMessage}<br />
                        {this.props.grubJoints.map(data =>
                            <li key={data.resturantYelpId} className='mapDisplayResults'>
                                {this.props.selectedFavorite === data.resturantYelpId && <input type='radio' className='mapDisplayRadio' name='mapDisplayRadio' value={data.resturantYelpId} />}
                                {this.props.selectedFavorite === data.resturantYelpId && <a href={REACT_APP_FAV_YELP_URL + data.resturantAlias} target='_blank'>{data.resturantName}</a>}

                                {this.props.selectedFavorite === data.resturantYelpId && <input type='text' className='mapDisplayText' name='mapDisplayText' value={data.resturantYelpId} placeholder={data.resturantName} />}

                            </li>
                        )}
                        <br />
                        <button type='submit' name='submit' id='editButton' className='editButton'>Edit Favorite</button>
                    </form>


                    <br />
                  
                </div>


            )
        }


    }
}

const mapStateToProps = state => ({
    errorMessage: state.errorMessage,
    noFavsMessage: state.noFavsMessage,
    grubJoints: state.grubJoints,
    editFavState: state.editFavState,
    selectedFavorite: state.selectedFavorite,
    isHidden: state.isHidden

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
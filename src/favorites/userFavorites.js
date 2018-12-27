import React from 'react';
import { connect } from 'react-redux'
import { REACT_APP_FAV_YELP_URL } from '../config'
import { setErrorState } from '../actions/actions'
import { performYelpCall, setSelectedFav, callAddNewFav, callViewFavs, searchNewFavs, getFavsSetState, updateFavCall,
    cancelEditFavs } from '../actions/favActions'


import './favorites.css';

class UserFavorites extends React.Component {

    
    componentDidMount() {
        console.log('userFavorites did mount')
        console.log('userFavs state: ', this.props)

        let userToken = this.props.userToken
        let authToken = this.props.authToken

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
        let findFav = this.props.selectedFavorite;
        let authToken = this.props.authToken

        return this.props.dispatch(getFavsSetState(findFav, authToken))
    }

    editFavCall(event) {
        event.preventDefault();
        console.log('EDIT CALL')

        
        let newFavName = this.newFavName.value
        let favId = this.favId.value
        let userToken = this.props.userToken
        let authToken = this.props.authToken
        
        console.log('newFavName: ', newFavName)
        console.log('favId: ', favId)

        return this.props.dispatch(updateFavCall(newFavName, favId, userToken, authToken))
    }

    cancelEditFavCall(event) {
        event.preventDefault();

        let userToken = this.props.userToken
        let authToken = this.props.authToken

        this.props.dispatch(callViewFavs(userToken, authToken))

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
                                <input type='radio' className='mapDisplayRadio' name='mapDisplayRadio' value={data.id}
                                    onChange={event => this.changeSelectedFavState(event)} />
                                <a href={REACT_APP_FAV_YELP_URL + data.resturantAlias} target='_blank'>{data.resturantName}</a>

                            </li>
                        )}
                        <br />
                        <button type='submit' name='submit' id='editButton' className='editButton dpe_button'>Edit Favorite</button>
                    </form>


                    <br />
                    <button id='addFavsButton' className='addFavsButton'
                        onClick={event => this.updateFavsState(event)}>Add new Favorites!</button>

                </div>

            )
        }

        if (this.props.editFavState === 1) {

            return (

                <div>
                    <h2 className='favsTitle'>Your Dread Pirate Eats favorites!</h2>
                    <br />
                    <form className='editFavs' onSubmit={event => this.editFavCall(event)}>

                        <span>Edit {this.props.editFavOjb.resturantName}</span>
                        <br />
                            <li key={this.props.editFavOjb.id} className='editResults'>
                                <p><input type='text' className='editFavTextBox' name='editFavTextBox' placeholder={this.props.editFavOjb.resturantName} 
                                     ref={newFavName => (this.newFavName = newFavName)} /></p>
                                    <input type='text' className='hidden'  value={this.props.editFavOjb.id}
                                       readOnly ref={favId => (this.favId = favId)}/>

                            </li>
                                         
                        <br />
                        <button type='submit' name='submit' id='editButton' className='editButton'>Save Change</button>
                    </form>
                    <br/>
                       <button type='cancel' name='cancel' id='editCancelButton' className='editCancelButton dpe_button'
                        onClick={event => this.cancelEditFavCall(event)}>Cancel</button>



                    <br />
                  
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

/*
















Search

require for search - name, user zip

Results
Show top 5 only
Sort by Distance to entered zip - nice to have determin location
Save to DB - 'userRef', 'resturantName', 'resturantZip', 'resturantCost', 'resturantYelpId'



*/
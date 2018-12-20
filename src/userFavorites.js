import React from 'react';
import { connect } from 'react-redux'
import { setErrorState } from './actions'
import { performYelpCall, setSelectedFav, callAddNewFav, callViewFavs, searchNewFavs } from './favActions'


import './favorites.css';

//export default function Favorites(props) {
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

    render() {
        
        return (

            <div>
                <h2 className='modalTitle'>Your Dread Pirate Eats favorites!</h2>
                <br />

                {this.props.grubJoints.map(data => 
                    <li className='mapDisplayUserFavs'>
                        {data.resturantName}
                    </li>
                )}

                <br />
                <span id='addFavsButton' className='addFavsButton'
                    onClick={event => this.updateFavsState(event)}>[Click to add new Favorites!]</span>
                
            </div>


        )
    }
}

const mapStateToProps = state => ({
    errorMessage: state.errorMessage,
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
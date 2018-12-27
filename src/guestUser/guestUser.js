import React from 'react'
import { connect } from 'react-redux'

import { guestLoginCall } from '../actions/guestActions';
import { callViewFavs } from '../actions/favActions'

import './guestUser.css'

class GuestUser extends React.Component {


    guestLogin(event) {
        event.preventDefault();

        const userLocation = this.userLoc.value
        const username = 'ricksanchez'
        const password = 'test9033'

        return this.props.dispatch(guestLoginCall(username, password, userLocation))

    }

    render() {

        return (

            <div className='pirateImageSection'>
                <h2 className='loginTitle'>Login to Dread Pirate Eats!</h2>
                <form className='logInForm' onSubmit={event => this.guestLogin(event)}>
                    <p>Enter your location (City or Zip):</p>
                    <input type='text' ref={userLoc => (this.userLoc = userLoc)} />
                    <br /><br />
                    <span id='errorMessage'>{this.props.errorMessage}</span>
                    <br /><br />
                    <button type='submit' name='submit' id='logInButton' className='logInButton'>Play as Guest</button>
                </form>
                <p className='joinCrew'>Want to join the crew?  <span id='signUpButton' className='signUpButton'
                    onClick={event => this.signUpScreen(event)}>[Join Now!]</span></p>
                <p className='cancel'><button id='cancelButton' className='cancelButton'onClick={event => this.cancel(event)}>Cancel</button></p>  

         
            </div>

        )
    }

}

const mapStateToProps = state => ({
    userToken: state.userToken,
    authToken: state.authToken,
    restart: state.restart,
    hangryTaunt: state.hangryTaunt,
    madeOffers: state.madeOffers,
    publicSort: state.publicSort,
    randomCheck: state.randomCheck, 
    theOffer: state.theOffer,
    grubJoints: state.grubJoints,
    numJoints: state.numJoints
})


export default connect(mapStateToProps)(GuestUser)
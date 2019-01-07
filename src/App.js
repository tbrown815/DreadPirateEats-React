import React from 'react';
import { connect } from 'react-redux'

import './App.css';

import Nav from './nav/nav'
import DrawBox from './drawbox/drawbox';
import UserLogin from './login_signup/userLogin';
import UserSignUp from './login_signup/userSignUp';
import Favorites from './favorites/favorites';
import GuestUser from './guestUser/guestUser';
import About from './nav/about'

import {userStillLoggedIn, logoutUser} from './actions/actions'


require('dotenv').config();

//export function DreadPirate(props) {

export class DreadPirate extends React.Component {
    

  /*LOGGEDIN STATE*/
  /*
  1 = User login displayed
  2 = User sign up displayed -> on successful creation state moves to 3
  3 = Valid user is logged in
  4 = User favorites are displayed
  5 = Guest "login"
  6 = User is Guest
7 = Display About
  */

 componentDidMount() {

  let authToken = localStorage.getItem('authToken')

  if(authToken) {
    
    this.props.dispatch(userStillLoggedIn(authToken))
  }

  else {
    this.props.dispatch(logoutUser())
  }


}


render() {

  if (this.props.loggedIn === 0) {
    return (
      <main>
        <Nav />

        <br />
        <div role='region' className='pirateImageSection'>
          <img src={require('./images/dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
        </div>

        <br />
        <DrawBox />

      </main>
    )
  }

  if (this.props.loggedIn === 1) {
    return (
      <main>

        <Nav />

        <br />
        <div role='region' className='pirateImageSection'>
          <UserLogin />
        </div>


      </main>

    )
  }

  if (this.props.loggedIn === 2) {
    return (
      <main>

        <Nav />

        <br />
        <div role='region' className='pirateImageSection'>
          <UserSignUp />
        </div>


      </main>

    )
  }

  if (this.props.loggedIn === 3) {

    return (
      <main>

        <Nav />

        <br />
        <div role='region' className='pirateImageSection'>
          <img src={require('./images/dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
        </div>

        <DrawBox />
      </main>

    )
  }

  if (this.props.loggedIn === 4) {
    return (
      <main>

        <Nav />

        <br />
        <div role='region' className='pirateImageSection'>
          <Favorites />
        </div>

      </main>

    )
  }

  if (this.props.loggedIn === 5) {
    return (
      <main>

        <Nav />

        <br />
        <div role='region' className='pirateImageSection'>
          <img src={require('./images/dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
        </div>
        <div className='pirateImageSection'>
          <GuestUser />
        </div>

      </main>

    )
  }

  if (this.props.loggedIn === 6) {
    return (
      <main>

        <Nav />
        <br />
        <div role='region' className='pirateImageSection'>
          <img src={require('./images/dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
        </div>

        <div className='pirateImageSection'>
          <GuestUser />
        </div>

      </main>

    )
  }

  if (this.props.loggedIn === 7) {
    return (
      <main>

        <Nav />

        <br />
        <div role='region' className='pirateImageSection'>
          <About />
        </div>


      </main>

    )
  }

}


} //end of export

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  oldLoginState: state.oldLoginState,
  authToken: state.authToken,
  userToken: state.userToken,
  currentUser: state.currentUser,
  errorMessage: state.errorMessage,
  grubJoints: state.grubJoints,
  publicSort: state.publicSort,
  madeOffers: state.madeOffers,
  restart: state.restart,
  theOffer: state.theOffer,
  numJoints: state.numJoints,
  newFavorites: state.newFavorites,
  userMessage: state.userMessage,
  publicHangryTaunt: state.publicHangryTaunt,
  randomCheck: state.randomCheck,
  publicJoints: state.publicJoints,
  publicNumJoints: state.publicNumJoints,
  publicMadeOffers: state.publicMadeOffers,
  publicTheOffer: state.publicTheOffer,
  publicRestart: state.publicRestart,
  publicDrawCount: state.publicDrawCount,
  noFavsMessage: state.noFavsMessage

})

/*LOGGEDIN STATE*/
/*
1 = User login displayed
2 = User sign up displayed -> on successful creation state moves to 3
3 = Valid user is logged in
4 = User favorites are displayed
5 = Guest "login"
6 = User is Guest
7 = Display About
*/


export default connect(mapStateToProps)(DreadPirate)
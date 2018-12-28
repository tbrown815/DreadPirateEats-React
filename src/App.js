import React from 'react';
import { connect } from 'react-redux'

import './App.css';

import Nav from './nav/nav'
import DrawBox from './drawbox/drawbox';
import UserLogin from './login_signup/userLogin';
import UserSignUp from './login_signup/userSignUp';
import Favorites from './favorites/favorites';
import GuestUser from './guestUser/guestUser';


require('dotenv').config();

export function DreadPirate(props) {

  console.log('state: ', props)


/*LOGGEDIN STATE*/
/*
1 = User login displayed
2 = User sign up displayed -> on successful creation state moves to 3
3 = Valid user is logged in
4 = User favorites are displayed
5 = Guest "login"
6 = User is Guest
*/

  if (props.loggedIn === 0) {
    return (
      <main>

        <Nav />

        <br />
        <div className='pirateImageSection'>
          <img src={require('./images/dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
        </div>

      <br/>
      <DrawBox />

      </main>

    )
  }

  if (props.loggedIn === 1) {
    return (
      <main>

        <Nav />

        <br />
        <div className='pirateImageSection'>
          <UserLogin />
        </div>


      </main>

    )
  }

  if (props.loggedIn === 2) {
    return (
      <main>

        <Nav />

        <br />
        <div className='pirateImageSection'>
          <UserSignUp />
        </div>


      </main>

    )
  }

  if (props.loggedIn === 3) {

    return (
      <main>

        <Nav />

        <br />
        <div className='pirateImageSection'>
          <img src={require('./images/dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
        </div>

        <DrawBox />
      </main>

    )
  }

  if (props.loggedIn === 4) {
    return (
      <main>

        <Nav />

        <br />
        <div className='pirateImageSection'>
          <Favorites />
        </div>

      </main>

    )
  }

  if (props.loggedIn === 5) {
    return (
      <main>

        <Nav />

        <br />
        <div className='pirateImageSection'>
          <img src={require('./images/dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
        </div>
        <div className='pirateImageSection'>
          <GuestUser />
        </div>

      </main>

    )
  }

  if (props.loggedIn === 6) {
    return (
      <main>

        <Nav />
        <br />
        <div className='pirateImageSection'>
          <img src={require('./images/dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
        </div>

        <div className='pirateImageSection'>
          <GuestUser />
        </div>

      </main>

    )
  }
} //end of export

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  authToken: state.authToken,
  userToken: state.userToken,
  currentUser: state.currentUser,
  errorMessage: state.errorMessage,
  grubJoints: state.grubJoints,
  publicSort: state.publicSort,
  madeOffers: state. madeOffers,
  restart: state.restart,
  theOffer: state.theOffer,
  numJoints: state.numJoints,
  newFavorites: state.newFavorites,
  userMessage: state.userMessage,
  publicHangryTaunt: state.publicHangryTaunt,
  randomCheck: state.randomCheck,
  publicSort: state.publicSort,
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
*/


export default connect(mapStateToProps)(DreadPirate)
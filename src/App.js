import React from 'react';
import { connect } from 'react-redux'

import './App.css';

import Nav from './nav/nav'
import DrawBox from './drawbox/drawbox';
import UserLogin from './login_signup/userLogin';
import UserSignUp from './login_signup/userSignUp';
import Favorites from './favorites/favorites';

require('dotenv').config();

export function DreadPirate(props) {

  console.log('state: ', props)


  if (props.loggedIn === 0) {
    return (
      <main>

        <Nav />

        <br />
        <div className='pirateImageSection'>
          <img src={require('./images/dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
        </div>

      <br/>
        <div  >
          <span className='tempText'>Login to start</span>
        </div>
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
  userMessage: state.userMessage

})


export default connect(mapStateToProps)(DreadPirate)
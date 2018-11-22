import React from 'react';
import { connect } from 'react-redux'

import './App.css';

import Nav from './nav'
import DrawBox from './drawbox';
import UserLogin from './userLogin';
import UserSignUp from './userSignUp';

export function DreadPirate(props) {


  if (props.loggedIn === 0) {
    return (
      <main>

        <Nav />

        <br />
        <div className='pirateImageSection'>
          <img src={require('./dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
        </div>

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
          <img src={require('./dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
        </div>

        <DrawBox />

       </main>

    )
  }
} //end of export

const mapStateToProps = state => ({
  hangryTaunt: state.hangryTaunt,
  madeOffers: state.madeOffers,
  loggedIn: state.loggedIn

})


export default connect(mapStateToProps)(DreadPirate)
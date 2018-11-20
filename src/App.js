//import React, { Component } from 'react';

import React from 'react';
import {connect} from 'react-redux'


import './App.css';

import Nav from './nav'
import DrawBox from './drawbox';

export default function DreadPirate(props) {

  return(
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


/*

export default class DreadPirate extends React.Component {


  constructor(props) {
    super(props);
    this.nav = React.createRef()
    this.state = {
      grubJoints: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
      madeOffers: [],
      theOffer: '',
      hangryTaunt: 'Click ta draw ya scally wag!',
      loggedIn: 0
    }
  }

  restartApp() {
    this.setState({
      grubJoints: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
      madeOffers: [],
      theOffer: '',
      hangryTaunt: 'Click ta draw ya scally wag!',
      loggedIn: 0
    })
  }


  setLogin(login) {

    if (login === 0) {
      this.restartApp()
    }

    if (login === 1) {
      this.setState({
        loggedIn: 1
      })
    }
  }

  signUpScreen(event) {
    event.preventDefault();

    this.setState({
      loggedIn: 2
    }, () => {
      this.nav.current.userLoggedIn(this.state.loggedIn)
    })
  }

  loginSuccess(event) {
    event.preventDefault();

    this.setState({
      loggedIn: 3
    }, () => {
      this.nav.current.userLoggedIn(this.state.loggedIn)
    })
  }




  findGrub(draws) {

    if (!draws) {
      this.restartApp()
    }

    else {

      let offerLength = this.state.grubJoints.length - 1;

      let random = Math.floor(Math.random() * parseInt(offerLength + 1)) + 0;

      let theOffer = this.state.grubJoints[random]

      
      this.setState({
        theOffer,
        madeOffers: [...this.state.madeOffers, `${theOffer} `]
      })

      if (draws > 2) {
        this.setState({
          hangryTaunt: `It's yer last stand ya scurvy dog!`
        })
      }

      if (draws > 3) {
        this.setState({
          hangryTaunt: `Yer time is up, walk thee plank!`
        })
      }


    }

  }


  render() {

    if (this.state.loggedIn === 0) {
      return (

        <main>

          <Nav setLogin={(login) => this.setLogin(login)} />

          <br />
          <div className='pirateImageSection'>
            <img src={require('./dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
          </div>

          <DrawBox findGrub={(draws) => this.findGrub(draws)} />

          <br />
          <div className='hangryTauntSection'>
            {this.state.hangryTaunt}

            <br />
            <ul>
              {this.state.madeOffers.map(offer => <li className='offerDisplay' >{offer}</li>)}
            </ul>
          </div>

        </main>

      );

    }

    if (this.state.loggedIn === 1) {
      return (

        <main>

          <Nav setLogin={(login) => this.setLogin(login)} ref={this.nav} />

          <br />
          <div className='pirateImageSection'>
            <h2 className='loginTitle'>Login to Dread Pirate Eats!</h2>
            <form className='logInForm'>
              <p>Enter your username:</p>
              <input type='text' />
              <br />
              <p>Enter your password:</p>
              <input type='text' />
              <br /><br />
              <button type='submit' name='submit' id='logInButton' className='logInButton'
                onClick={event => this.loginSuccess(event)} >Log In</button>
            </form>
            <p className='joinCrew'>Not a member of the crew?  <span id='signUpButton' className='signUpButton'
              onClick={event => this.signUpScreen(event)}>[Join Now!]</span></p>
          </div>

        </main>

      );

    }

    if (this.state.loggedIn === 2) {
      return (
        <main>
          <Nav setLogin={(login) => this.setLogin(login)} ref={this.nav} />

          <br />
          <div className='pirateImageSection'>
            <h2 className='loginTitle'>Join thee crew!</h2>
            <form className='signUpForm'>
              <p>Enter your username:</p>
              <input type='text' />
              <p>Enter your e-mail address:</p>
              <input type='text' />
              <p>Enter your password:</p>
              <input type='text' />
              <p>Confirm your password:</p>
              <input type='text' />
              <br /><br />
              <button type='submit' name='submit' id='logInButton' className='logInButton'
                onClick={event => this.loginSuccess(event)} >Join!</button>
            </form>

          </div>

        </main>

      );

    }

    if (this.state.loggedIn === 3) {
      return (

        <main>

          <Nav setLogin={(login) => this.setLogin(login)} ref={this.nav} />

          <br />
          <div className='pirateImageSection'>
            <img src={require('./dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
          </div>

          <DrawBox findGrub={(draws) => this.findGrub(draws)} />

          <br />
          <div className='hangryTauntSection'>
            {this.state.hangryTaunt}

            <br />
            <ul>
              {this.state.madeOffers.map(offer => <li className='offerDisplay'>{offer}</li>)}
            </ul>
          </div>

        </main>

      );

    }
  } //This is the end of render


}

*/

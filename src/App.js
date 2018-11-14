import React from 'react';

import './App.css';

import Nav from './nav'
import DrawBox from './drawbox';

export default class DreadPirate extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      grubJoints: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
      madeOffers: [],
      theOffer:'',
      hangryTaunt: 'Click to draw!'
      }
  }

  restartApp() {
    this.setState({
      grubJoints: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
      madeOffers: [],
      theOffer:'',
      hangryTaunt: 'Click to draw!'
    })
  }


  findGrub(draws) {
    console.log('what is draw count: ', draws)

    if(!draws) {
      console.log('restart flow: ', draws)
      this.restartApp()
    }

    else {

      let offerLength = this.state.grubJoints.length-1;
      console.log('offerLength: ', offerLength)

      let random = Math.floor(Math.random() * parseInt(offerLength+1)) +0;
      console.log('random: ', random)

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
    return (

      <main>

        <Nav />

        <br/>
          <div className='pirateImageSection'>
            <img src={require('./dreadPirate.png')} className='dreadPirateImage' alt='The Dread Pirate himself' />
          </div>
        
        <DrawBox findGrub={(draws) => this.findGrub(draws)}/>

          <br/>
          <div className='hangryTauntSection'>
              {this.state.hangryTaunt}

          <br/>
            <ul>
              {this.state.madeOffers.map(offer => <li className='offerDisplay'>{offer}</li>)}
            </ul>
          </div>

      </main>

    );
  }
}


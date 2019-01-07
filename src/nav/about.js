import React from 'react';
import { connect } from 'react-redux'
import { cancelAbout } from '../actions/actions'

import './about.css';

export class About extends React.Component {

    clickReturn(event) {
        event.preventDefault();
        if (this.props.prevLoggedIn === undefined) {

            let oldLoginState = 0;

            this.props.dispatch(cancelAbout(oldLoginState))
        }

        else {
            let oldLoginState = this.props.prevLoggedIn;

            this.props.dispatch(cancelAbout(oldLoginState))
        }

    }


    render() {
        return (

            <div id='odpe_about' className='odpe_about'>
                <div >
                    <h2 className='dpeAbout'>About Dread Pirate Eats!</h2>
                    <h4 className='aboutTitle'>How to play the Dread Pirate Eats</h4>

                    <ul className='dpeList'>
                        <li className='dpeListItem'>Click the button to draw a restaurant.</li>
                        <li className='dpeListItem'>You will receive 3 initial selections near your location to chose from.</li>
                        <li className='dpeListItem'>The 4th and final selection is your "Last Stand," and if used must be the option you choose.</li>
                    </ul>
                    <h4 className='aboutTitle'>History of the Dread Pirate Eats</h4>
                    <div role='contentinfo' className='dpeInfo'>
                        <ul className='dpeList'>
                            <li className='dpeInfoItem'>The Dread Pirate Eats game started in 2009 when my wife and
                            I struggled to agree on a restaurant for date night. Out of this issue, the Dread Pirate Eats was born!</li>
                            <br /><br />
                            <li className='dpeInfoItem'>We wrote names of our favorite and new resturants on pieces of paper, loaded them
                            into an old pirate cookie jar, and created the rules for the game. Nine years later, the Dread Pirate Eats gets a digital upgrade!</li>

                        </ul>
                    </div>
                    <div className='origDPEBox'>
                        <h4>The original Dread Pirate Eats!</h4>
                        <img src={require('../images/origDPE.jpg')} alt='the original dread pirate eats' className='origDPE' />
                    </div>
                </div>
                <p className='returnButton'><button id='returnButton' className='returnButton clickReturnButton' onClick={event => this.clickReturn(event)}>Return</button></p>
            </div>
        )
    }
}




const mapStateToProps = state => ({
    loggedIn: state.loggedIn,
    prevLoggedIn: state.prevLoggedIn
})


export default connect(mapStateToProps)(About)
import React from 'react';
import { connect } from 'react-redux'
import { cancelAbout } from '../actions/actions'

import './about.css';

class About extends React.Component {

    clickReturn(event) {
        event.preventDefault();
        
        let oldLoginState = this.props.prevLoggedIn;

        this.props.dispatch(cancelAbout(oldLoginState))
    }


    render() {
        return (

            <div id='odpe_about' className='odpe_about'>
                <div >
                    <h2 className='aboutTitle'>About Dread Pirate Eats!</h2>
                    <h4>How to play the Dread Pirate Eats game-</h4>

                    <ul className='dpeList'>
                        <li className='dpeListItem'>Click the button to draw a resturant.</li>
                        <li className='dpeListItem'>You receive 3 initial selections to choose from.</li>
                        <li className='dpeListItem'>Your 4th selection is your "Last Stand", this is your final selection and if used is the option you must choose.</li>
                    </ul>
                    <h4 className='aboutTitle'>History of the Dread Pirate Eats-</h4>
                    <p role='contentinfo' className='dpeInfo'>
                        <ul className='dpeList'>
                        <li className='dpeInfoItem'>The Dread Pirate Eats game started around 2009.  My wife and I found that either neither of us cared where we went
                        to eat OR one of us was feeling too picky with the others' suggestions.  Out of this issue the Dread Pirate Eats was born!</li>
                        <br /><br />
                        <li className='dpeInfoItem'>We wrote the names down of our favorite and new resturants on pieces of paper, loaded them into an old pirate cookie jar, and
                        created the rules for the game.  Now the Dread Pirate Eats gets a digital upgrade!</li>

                        </ul>            
                        </p>
                    <div className='origDPEBox'>
                        <h4>The original Dread Pirate Eats!</h4>
                        <img src={require('../images/origDPE.jpg')} alt='the original dread pirate eats' className='origDPE' />
                    </div>
                </div>
                <p className='returnButton'><button id='returnButton' className='returnButton' onClick={event => this.clickReturn(event)}>Return</button></p>
            </div>
        )
    }
}




const mapStateToProps = state => ({
    loggedIn: state.loggedIn,
    prevLoggedIn: state.prevLoggedIn
})


export default connect(mapStateToProps)(About)
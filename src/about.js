import React from 'react';

import './nav.css';

export default function About(props) {

    return (

        <div id='aboutModal' className='modal modalContent'>
            <div>
                <a href='#close' title='Close' className='close'>X</a>
                <h2 className='modalTitle'>About Dread Pirate Eats!</h2>
                <h4>How to play the Dread Pirate Eats game-</h4>
                <br />
                <ol>
                    <li>Click the button to draw a resturant.</li>
                    <li>You receive 3 initial selections to choose from.</li>
                    <li>Your 4th selection is your "Last Stand", this is your final selection and if used is the option you must choose.</li>
                </ol>
                <h4>History of the Dread Pirate Eats-</h4>
                <p>The Dread Pirate Eats game started around 2009.  My wife and I found that either neither of us cared where we went
to eat OR one of us was feeling too picky with the others' suggestions.  Out of this issue the Dread Pirate Eats was born! <br />
                    We wrote the names down of our favorite and new resturants on pieces of paper, loaded them into an old pirate cookie jar, and
                    created the rules for the game.  Now the Dread Pirate Eats gets a digital upgrade!
</p>
                <div className='origDPEBox'>
                    <h4>The original Dread Pirate Eats!</h4>
                    <img src={require('./origDPE.jpg')} alt='the original dread pirate eats' className='origDPE' />
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import { connect } from 'react-redux'

import { loginUser } from '../actions/actions';
import { callViewFavs } from '../actions/favActions'
import { findGrub, restartApp, grubSearch, callRestart } from '../actions/grubActions'
import { guestLogin } from '../actions/guestActions'

import './drawbox.css'


class DrawBox extends React.Component {


    componentDidMount() {

        if (this.props.publicSort.length < 2) {
            let userToken = this.props.userToken
            let authToken = this.props.authToken

            this.props.dispatch(callViewFavs(userToken, authToken))
        }
    }
/*
    onDraw(event) {

        event.preventDefault();

        console.log('onSubmit this.props.restart', this.props)

        this.props.dispatch(callGrubSelection())
    }
*/

    searchAgain(event) {
        this.onDraw(event)
    }

    onDraw(event) {
        event.preventDefault();

        let randomVal = Math.floor(Math.random() * parseInt(this.props.grubJoints.length)) + 0;

        console.log('randomVal: ', randomVal)

           
                let theOffer = this.props.grubJoints[randomVal].resturantName
        
                let madeOffers = [...this.props.madeOffers, `${theOffer} `]
                
                let numOffers = this.props.madeOffers.length + 1;
                
                let hangryTaunt;
                
                let restart;

                let updatedGrub = this.props.grubJoints.splice(randomVal, 1)

                let numJoints = this.props.numJoints;

                let userToken = this.props.userToken
                
                let authToken = this.props.authToken

                console.log('theOffer: ', theOffer)

                console.log('updatedGrub: ', updatedGrub)
                
                console.log('numOffers: ', numOffers)

                if(numJoints < 5) {
                if (numOffers < numJoints) {
                    hangryTaunt = `Draw again ya scoundrel!`
                    restart = false
        
                    this.props.dispatch(grubSearch(hangryTaunt, madeOffers, restart, theOffer, userToken, authToken))
        
                }

                if (numOffers < numJoints-2) {
                    hangryTaunt = `Draw again ya scallywag!`
                    restart = false
        
                    this.props.dispatch(grubSearch(hangryTaunt, madeOffers, restart, theOffer, userToken, authToken))
        
                }

                if (numOffers === numJoints-1) {
                    hangryTaunt = `It's yer last stand ya scurvy dog!`
                    restart = false
        
                    this.props.dispatch(grubSearch(hangryTaunt, madeOffers, restart, theOffer, userToken, authToken))
        
                }

                if (numOffers === numJoints) {
                    //hangryTaunt = `It's yer last stand ya scurvy dog!`
                    restart = true
        
                    this.props.dispatch(grubSearch(hangryTaunt, madeOffers, restart, theOffer, userToken, authToken))
        
                }
            }
            else {
                if (numOffers < numJoints) {
                    hangryTaunt = `Draw again ya scoundrel!`
                    restart = false
        
                    this.props.dispatch(grubSearch(hangryTaunt, madeOffers, restart, theOffer, userToken, authToken))
        
                }

                if (numOffers === 2) {
                    hangryTaunt = `Arr ya scallywag, draw again!`
                    restart = false
        
                    this.props.dispatch(grubSearch(hangryTaunt, madeOffers, restart, theOffer, userToken, authToken))
        
                }

                if (numOffers === 3) {
                    hangryTaunt = `It's yer last stand ya scurvy dog!`
                    restart = false
        
                    this.props.dispatch(grubSearch(hangryTaunt, madeOffers, restart, theOffer, userToken, authToken))
        
                }

                if (numOffers === 4) {
                    //hangryTaunt = `It's yer last stand ya scurvy dog!`
                    restart = true
        
                    this.props.dispatch(grubSearch(hangryTaunt, madeOffers, restart, theOffer, userToken, authToken))
        
                }

            }
              
    }


    restartApp(event) {

        event.preventDefault();

        let userToken = this.props.userToken
                
        let authToken = this.props.authToken
        console.log('restartApp')

        this.props.dispatch(callRestart(userToken, authToken))
    }

    loginClick(event) {
        event.preventDefault();

        this.props.dispatch(loginUser())
    }
    
    continueGuest(event) {
        event.preventDefault();

        this.props.dispatch(guestLogin())
    }

    render() {

        if (this.props.loggedIn === 0){

            return (
                <div>
                    <div  className='homeDecision'>
                        <button className='drawBoxLoginButton homeDecisionButton dpe_button' onClick={event => this.loginClick(event)}>Login to start</button>
                        <br/><br/>
                        <button className='drawBoxGuestButton homeDecisionButton dpe_button' onClick={event => this.continueGuest(event)}>Continue as Guest</button>
    
                    </div>
    
                </div>
            )
    
        }

    else if(this.props.loggedIn > 0 && this.props.loggedIn < 5) {
        if (!this.props.restart) {
            return (
                <div>
                    <div className='drawForm'>
                        <form onSubmit={event => this.onDraw(event)}>
                            <button type='submit' name='submit' id='drawButton' className='drawbutton dpe_button'>Whar do ye want to eat?</button>
                        </form>
                    </div>

                    <br />
                    <div className='hangryTauntSection'>
                        {this.props.hangryTaunt}

                        <br />
                        <ul>
                            {this.props.madeOffers.map(offer => <li key={offer} className='offerDisplay' >{offer}</li>)}
                        </ul>
                    </div>
                </div>
            )
        }

        if (this.props.restart) {
            return (
                <div>
                    <div className='drawForm'>
                        <form onSubmit={event => this.restartApp(event)}>
                            <button type='submit' name='reset' id='restartButton' className='restartButton dpe_button'>Restart the game?</button>
                        </form>
                        <br />
                        <div className='hangryTauntSection'>
                                <span> Ye time is up, walk thee plank! </span>
                            <br />
                            <ul>
                                {this.props.madeOffers.map(offer => <li key={offer} className='offerDisplay' >{offer}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>)
        }
    }

    else if (this.props.loggedIn === 6){

        return (
            <div>
                <div className='drawForm'>
                <span>GUEST</span>
                    <form onSubmit={event => this.onDraw(event)}>
                        <button type='submit' name='submit' id='drawButton' className='drawbutton dpe_button'>Whar do ye want to eat?</button>
                    </form>
                </div>

                <br />
                <div className='hangryTauntSection'>
                    {this.props.hangryTaunt}

                    <br />
                    <ul>
                        {this.props.madeOffers.map(offer => <li key={offer} className='offerDisplay' >{offer}</li>)}
                    </ul>
                </div>
            </div>
        )

    }
    
    }//END RENDER

}//END CLASS


const mapStateToProps = state => ({
    loggedIn: state.loggedIn,
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


export default connect(mapStateToProps)(DrawBox)
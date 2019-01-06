import React from 'react'
import { connect } from 'react-redux'

import { loginUser, displayAbout } from '../actions/actions';
import { callViewFavs, editFavs } from '../actions/favActions'
import { grubSearch, callRestart } from '../actions/grubActions'
import { guestLogin } from '../actions/guestActions'

import './drawbox.css'


export class DrawBox extends React.Component {


    componentDidMount() {

        if (this.props.publicSort.length < 2) {
            let userToken = this.props.userToken
            let authToken = this.props.authToken

            this.props.dispatch(callViewFavs(userToken, authToken))
        }
    }

    searchAgain(event) {
        this.onDraw(event)
    }

    onDraw(event) {
        event.preventDefault();

        let randomVal = Math.floor(Math.random() * parseInt(this.props.grubJoints.length)) + 0;

        console.log('randomVal: ', randomVal)


        let theOffer = this.props.grubJoints[randomVal]

        let madeOffers = [...this.props.madeOffers, { restaurantName: theOffer.restaurantName, restaurantAlias: `https://www.yelp.com/biz/${theOffer.restaurantAlias}` }]

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

        if (numJoints < 5) {
            if (numOffers < numJoints) {
                hangryTaunt = `Draw again ya scoundrel!`
                restart = false

                this.props.dispatch(grubSearch(hangryTaunt, madeOffers, restart, theOffer, userToken, authToken))

            }

            if (numOffers < numJoints - 2) {
                hangryTaunt = `Draw again ya scallywag!`
                restart = false

                this.props.dispatch(grubSearch(hangryTaunt, madeOffers, restart, theOffer, userToken, authToken))

            }

            if (numOffers === numJoints - 1) {
                hangryTaunt = `It's yer last stand ya scurvy dog!`
                restart = false

                this.props.dispatch(grubSearch(hangryTaunt, madeOffers, restart, theOffer, userToken, authToken))

            }

            if (numOffers === numJoints) {
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

    editUserFavs(event) {
        event.preventDefault();

        this.props.dispatch(editFavs())
    }

    clickAbout(event) {
        event.preventDefault();

        let oldLoginState = this.props.loggedIn;

        this.props.dispatch(displayAbout(oldLoginState))
    }


    render() {

        if (this.props.loggedIn === 0) {

            return (
                <div>
                    <div className='homeDecision'>
                        <button className='drawBoxLoginButton homeDecisionButton dpe_button' id='LoginToStart' aria-pressed='false'
                            onClick={event => this.loginClick(event)}>Login to start</button>
                        <br /><br />
                        <button className='drawBoxGuestButton homeDecisionButton dpe_button' id='ContinueAsGuest' aria-pressed='false'
                            onClick={event => this.continueGuest(event)}>Continue as Guest</button>

                    </div>

                </div>
            )

        }

        if (!this.props.restart) {

            if (this.props.grubJoints.length < 1) {
                return (
                    <div>
                        <div className='drawForm'>
                            <p className='newUserNoFavs'>Click below to add favorites!</p>

                            <form id='drawForm' onSubmit={event => this.editUserFavs(event)}>
                                <button type='submit' name='submit' id='drawButton' className='drawbutton dpe_button'
                                    id='DrawResturantButton' aria-pressed='false'>Add favorites?</button>
                            </form>
                            <br />
                            <button className='newPlayer' onClick={event => this.clickAbout(event)}>Not sure how to play?</button>
                        </div>

                        <br />

                    </div>

                )

            }

            else {
                return (
                    <div>
                        <div className='drawForm'>
                            <form id='drawForm' onSubmit={event => this.onDraw(event)}>
                                <button type='submit' name='submit' id='drawButton' className='drawbutton dpe_button'
                                    id='DrawResturantButton' aria-pressed='false'>Whar do ye want to eat?</button>
                            </form>
                        </div>

                        <br />
                        <div className='hangryTauntSection'>
                            <span role='alert'>{this.props.hangryTaunt}</span>

                            <br />
                            <ul>
                                {this.props.madeOffers.map(offer =>
                                    <li key={offer.restaurantName} className='offerDisplay' >
                                        <a href={offer.restaurantAlias} target='_blank'>{offer.restaurantName}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                )
            }
        }

        if (this.props.restart) {
            return (
                <div>
                    <div className='drawForm'>
                        <form id='drawForm' onSubmit={event => this.restartApp(event)}>
                            <button type='submit' name='reset' id='restartButton' className='restartButton dpe_button'
                                id='RestartGame' aria-pressed='false'>Restart the game?</button>
                        </form>
                        <br />
                        <div className='hangryTauntSection'>
                            <span role='alert'> Ye time is up, walk thee plank! </span>
                            <br />
                            <ul>
                                {this.props.madeOffers.map(offer =>
                                    <li key={offer.restaurantName} className='offerDisplay' >
                                        <a href={offer.restaurantAlias} target='_blank'>{offer.restaurantName}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>)
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
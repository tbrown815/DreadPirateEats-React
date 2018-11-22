import React from 'react'
import { connect } from 'react-redux'

import { findGrub, restartApp } from './actions';

import './drawbox.css'

class DrawBox extends React.Component {

    onDraw(event) {

        event.preventDefault();

        console.log('onSubmit this.props.restart', this.props)

        this.props.dispatch(findGrub())
    }

    restartApp(event) {

        event.preventDefault();

        console.log('restartApp')

        this.props.dispatch(restartApp())
    }

    render() {

        if (!this.props.restart) {
            return (
                <div>
                    <div className='drawForm'>
                        <form onSubmit={event => this.onDraw(event)}>
                            <button type='submit' name='submit' id='drawButton' className='drawbutton'>Whar do ye want to eat?</button>
                        </form>
                    </div>

                    <br />
                    <div className='hangryTauntSection'>
                        {this.props.hangryTaunt}

                        <br />
                        <ul>
                            {this.props.madeOffers.map(offer => <li className='offerDisplay' >{offer}</li>)}
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
                            <button type='submit' name='reset' id='restartButton' className='restartButton'>Restart the game?</button>
                        </form>
                        <br />
                        <div className='hangryTauntSection'>
                            {this.props.hangryTaunt}

                            <br />
                            <ul>
                                {this.props.madeOffers.map(offer => <li className='offerDisplay' >{offer}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>)
        }
    }

}


const mapStateToProps = state => ({
    restart: state.restart,
    hangryTaunt: state.hangryTaunt,
    madeOffers: state.madeOffers
})


export default connect(mapStateToProps)(DrawBox)
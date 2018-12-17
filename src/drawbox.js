import React from 'react'
import { connect } from 'react-redux'

import { findGrub, restartApp } from './actions';
import { callViewFavs } from './favActions'

import './drawbox.css'

class DrawBox extends React.Component {

    
    componentDidMount() {
        if(this.props.grubJoints.length === 0) {
            let userToken = localStorage.getItem('userToken')
            let authToken = localStorage.getItem('authToken')

            this.props.dispatch(callViewFavs(userToken, authToken))
        }
    }
    
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
    madeOffers: state.madeOffers,
    grubJoints: state.grubJoints
})


export default connect(mapStateToProps)(DrawBox)
import React from 'react'
import {connect} from 'react-redux'

import { findGrub, restartApp } from './actions';

import './drawbox.css'

class DrawBox extends React.Component {

    onSubmit(event) {

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
        
        if(!this.props.restart) {
            return(
                <div className='drawForm'>
                    <form >
                        <button type='submit' name='submit' id='drawButton' className='drawbutton' 
                        onClick={event => this.onSubmit(event)}>Whar do ye want to eat?</button>
                    </form>
                </div>
            )
        }

        if(this.props.restart) {
            return(
                <div className='drawForm'>
                    <form onSubmit={event => this.restartApp(event)}>
                        <button type='submit' name='reset' id='restartButton' className='restartButton'>Restart the game?</button>
                    </form>
                </div>                )
        }
    }

}


const mapStateToProps = state => ({
    //numDraws: state.madeOffers.length,
    //gameOn: state.gameOn,
    restart: state.restart
}, () => {
    console.log('state.restart: ', state.restart)
})


export default connect(mapStateToProps)(DrawBox)




/*
export default class DrawBox extends React.Component {

        constructor(props) {
            super(props)

            this.state={
                numDraws: 1,
                gameOn: true,
                restart: false
            }
        }


        onSubmit(event) {

            event.preventDefault();

            let draws = this.state.numDraws;

            this.setState({
                numDraws: this.state.numDraws+1
            })
        
            if(draws > 3) {
                this.setState({
                    gameOn: true,
                    restart: false
                })
            }

            if(draws === 4) {
                this.setState({
                    gameOn: false,
                    restart: true
                })
            }

            this.props.findGrub(draws)

        }

        restartApp(event) {
            event.preventDefault();

            this.setState({
                numDraws: 1,
                gameOn: true,
                restart: false
            })
            
            this.props.findGrub(this.state.gameOn)

        }

        render() {
            
            

            if(this.state.gameOn) {
                return(
                    <div className='drawForm'>
                        <form >
                            <button type='submit' name='submit' id='drawButton' className='drawbutton' 
                            onClick={event => this.onSubmit(event)}>Whar do ye want to eat?</button>
                        </form>
                    </div>
                )
            }

            if(this.state.restart) {
                return(
                    <div className='drawForm'>
                        <form onSubmit={event => this.restartApp(event)}>
                            <button type='submit' name='reset' id='restartButton' className='restartButton'>Restart the game?</button>
                        </form>
                    </div>                )
            }
        }


}

*/
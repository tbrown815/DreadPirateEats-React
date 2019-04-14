import React from 'react'
import {connect} from 'react-redux'
import './spinner.css'


export class Spinner extends React.Component {


render() {

    if(this.props.spinner) {
    
        return(

            <div className='spinner'>

               <div className='psbText'>
               Loading...Please stand by.
               </div>

            </div>

        )

    }
    else {
        return(
            <div className='noSpinner'></div>
        )
    }

}


}

const mapStateToProps = state => ({
    spinner: state.spinner
})

export default connect(mapStateToProps)(Spinner)
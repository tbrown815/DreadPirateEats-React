import React from 'react'

import './nav.css'

//export default function Nav(props) {


export default class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false
        }
        
        console.log('loggedIn: ', this.state.loggedIn)
    }

    onSubmit(event) {
        event.preventDefault();


        this.setState({
            loggedIn: true
        })
    }
    
    
    
    
    render() {
        
        console.log('loggedIn: ', this.state.loggedIn)

    
    
    if(!this.state.loggedIn) {
    return(

    <header>

        <nav className='col-12 topNav'>
            <h1 className='navTitle'>Dread Pirate Eats</h1>
            <ul>
                <li><a href='#aboutModal'>About</a></li>
                <li><a href='#loginModal'>Login</a></li>
            </ul>
        </nav>

        {/*<!-- This is the HTML for the modal-->*/}
  <div id='aboutModal' className='modal modalContent'>
      <div>
          <a href='#close' title='Close' className='close'>X</a>
          <h2 className='modalTitle'>About Dread Pirate Eats!</h2>
          <p>This is how to play the Dread Pirate Eats game.</p>
          <br/>
          <p>This is the Dread Pirate Eats history.</p>
      </div>
  </div>


  <div id='loginModal' className='modal modalContent'>
          <div>
          <a href='#close' title='Close' className='close'>X</a>
          <h2 className='modalTitle'>Login to Dread Pirate Eats!</h2>
        <form className='logInForm modalForm'>
          <p>Enter your username:</p>
          <input type='text'/>
          <br/>
          <p>Enter your password:</p>
          <input type='text'/>
          <br/><br/>
          <button type='submit' name='submit' id='logInButton' className='logInButton' 
                    onClick={event => this.onSubmit(event)}>Log In</button>   
        </form>
          <p className='joinCrew'>Not a member of the crew?  <a href='#signUpModal'>Sign-Up!</a></p>
      </div>
  </div>

  <div id='signUpModal' className='modal modalContent'>
      <div>
          <a href='#close' title='Close' className='close'>X</a>
          <h2 className='modalTitle'>Sign-up for Dread Pirate Eats!</h2>
        <form className='signUpForm modalForm'>
            <p>Enter your username:</p>
            <input type='text'/>
            <br/>
            <p>Enter your e-mail address:</p>
            <input type='text'/>
            <br/>
            <p>Enter your password:</p>
            <input type='text'/>
            <br/>
            <p>Confirm your password:</p>
            <input type='text'/>
            <br/>
            <p><a href='site.html#close'>[Submit Button]</a></p>
        </form>
      </div>
  </div>

    </header>

            )
        } 




    if(this.state.loggedIn) {
            return(
        
            <header>
        
                <nav className='col-12 topNav'>
                    <h1 className='navTitle'>Dread Pirate Eats</h1>
                    <ul>
                        <li><a href='#aboutModal'>About</a></li>
                        <li><a href='#favsModal'>Favorites</a></li>
                    </ul>
                </nav>
        
                {/*<!-- This is the HTML for the modal-->*/}
          <div id='aboutModal' className='modal modalContent'>
              <div>
                  <a href='#close' title='Close' className='close'>X</a>
                  <h2 className='modalTitle'>About Dread Pirate Eats!</h2>
                  <p>This is how to play the Dread Pirate Eats game.</p>
                  <br/>
                  <p>This is the Dread Pirate Eats history.</p>
              </div>
          </div>
        
        
          <div id='favsModal' className='modal modalContent'>
      <div>
          <a href='#close' title='Close' className='close'>X</a>
          <h2 className='modalTitle'>Your current Dread Pirate Eats favorites!</h2>
          <form className='modalForm'>
            <br/>
            <p><input type='checkbox' /> Favorite place #1 </p>
            <p><input type='checkbox' /> Favorite place #2 </p>
            <p><input type='checkbox' /> Favorite place #3 </p>
            <p><input type='checkbox' /> Favorite place #4 </p>
            <p><input type='checkbox' /> Favorite place #5 </p>

            <p><a href='#delete'>[Delete Button]</a></p>

            <br/>

            <h2>Add a new Favorite!</h2>

            <p>Resturant Name:</p>
            <input type='text'/>
            <p>Enter resturant city and state:</p>
            <input type='text'/>
            <p><a href='#search'>[Search]</a></p>

            <br/>
            <h2>Search Results</h2>

            <p><input type='checkbox' /> Result #1 </p>
            <p><input type='checkbox' /> Result #2 </p>

            <p><a href='#add'>[Add Button]</a></p>

        </form>
      </div>
  </div>
        
            </header>
        
                    )
                } 


    }
}
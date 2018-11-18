import React from 'react';

import './nav.css';

export default function Favorites(props) {

    return (

        <div id='favsModal' className='modal modalContent'>
            <div>
                <a href='#close' title='Close' className='close'>X</a>
                <h2 className='modalTitle'>Your current Dread Pirate Eats favorites!</h2>
                <form className='modalForm'>
                    <br />
                    <p><input type='checkbox' /> Favorite place #1 </p>
                    <p><input type='checkbox' /> Favorite place #2 </p>
                    <p><input type='checkbox' /> Favorite place #3 </p>
                    <p><input type='checkbox' /> Favorite place #4 </p>
                    <p><input type='checkbox' /> Favorite place #5 </p>

                    <p><a className='link' href='#delete'>[Delete Button]</a></p>

                    <br />

                    <h2>Add a new Favorite!</h2>

                    <p>Resturant Name:</p>
                    <input type='text' />
                    <p>Enter resturant city and state:</p>
                    <input type='text' />
                    <p><a className='link' href='#search'>[Search]</a></p>

                    <br />
                    <h2>Search Results</h2>

                    <p><input type='checkbox' /> Result #1 </p>
                    <p><input type='checkbox' /> Result #2 </p>

                    <p><a className='link' href='#add'>[Add Button]</a></p>

                </form>
            </div>
        </div>

    )

}
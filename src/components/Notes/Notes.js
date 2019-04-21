import React from 'react';
import SaveButton from '../SaveButton/SaveButton'

import './Notes.css'

const Notes = () => {
    return (
        <div>
            <textarea cols="35" rows="5" placeholder="Notes"></textarea>
            <SaveButton/>
        </div>
    )
}
 
export default Notes;